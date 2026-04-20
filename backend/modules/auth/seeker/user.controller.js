import generateToken from '../../../utils/generateToken.js';
import User from './user.model.js';
import bcrypt from 'bcryptjs';

//select role
export const selectRole = async (req, res) => {
  try {
    const { role } = req.body;

    if (!role) {
      return res.status(400).json({
        success: false,
        message: 'Role is required',
      });
    }

    if (!['seeker', 'vendor'].includes(role)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid role',
      });
    }

    const user = await User.create({
      role,
      registrationStep: 1,
      registrationCompleted: false,
    });

    const token = generateToken(user._id);

    return res.status(201).json({
      success: true,
      message: 'Role selected successfully',
      token,
      user: {
        _id: user._id,
        role: user.role,
        registrationStep: user.registrationStep,
        registrationCompleted: user.registrationCompleted,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || 'Failed to select role',
    });
  }
};


export const registerUser = async (req, res) => {
  try {
    const user = req.user;

    // 1. Ensure previous step is completed
    if (user.registrationStep < 1) {
      return res.status(400).json({
        success: false,
        message: "Please complete role selection first",
      });
    }

    // 2. Extract data from request body
    const { name, email, phone, password } = req.body;

    // 3. Validate required fields
    if (!name || !email || !phone || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email, phone, and password are required",
      });
    }

    // 4. Check duplicate email
    const existingEmailUser = await User.findOne({
      email: email.toLowerCase(),
      _id: { $ne: user._id },
    });

    if (existingEmailUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    // 5. Check duplicate phone
    const existingPhoneUser = await User.findOne({
      phone,
      _id: { $ne: user._id },
    });

    if (existingPhoneUser) {
      return res.status(400).json({
        success: false,
        message: "Phone already exists",
      });
    }

    // 6. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 7. Update current user
    user.name = name.trim();
    user.email = email.toLowerCase().trim();
    user.phone = phone.trim();
    user.password = hashedPassword;
    user.registrationStep = 2;

    // 8. Save updated user
    await user.save();

    // 9. Send response
    return res.status(200).json({
      success: true,
      message: "Basic registration details saved successfully",
      user: {
        _id: user._id,
        role: user.role,
        name: user.name,
        email: user.email,
        phone: user.phone,
        registrationStep: user.registrationStep,
        registrationCompleted: user.registrationCompleted,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to register user",
    });
  }
};


export const saveAddress = async (req,res) => {
    try{
        const user = req.user;
        if(user.registrationStep <2){
            return res.status(400).json({
                success: false,
                 message: "Please complete basic information first",
            })
        }
      
        const {street, city,state,pincode,landmark,tag,isDefault} = req.body;
         if (!street || !city || !state || !pincode) {
      return res.status(400).json({
        success: false,
        message: "Street, city, state, and pincode are required",
      });
    }
     if (isDefault) {
      user.addresses.forEach((addr) => {
        addr.isDefault = false;
      });
    }

     user.addresses.push({
      street,
      city,
      state,
      pincode,
      landmark: landmark || "",
      tag: tag || "Home",
      isDefault: isDefault || false,
    });


    user.registrationStep = Math.max(user.registrationStep, 3);
     await user.save();
    return res.status(200).json({
      success: true,
      message: "Address saved successfully",
      user: {
        _id: user._id,
        addresses: user.addresses,
        registrationStep: user.registrationStep,
        registrationCompleted: user.registrationCompleted,
      },
    });
    
    }
   catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to save address",
    });
  }
};



export const completeRegistration = async (req, res) => {
  try {
    const user = req.user;

    // 1. Step guard
    if (user.registrationStep < 3) {
      return res.status(400).json({
        success: false,
        message: "Please complete previous steps first",
      });
    }

    // 2. Validate basic info
    if (!user.name || !user.email || !user.phone || !user.password) {
      return res.status(400).json({
        success: false,
        message: "Basic user information is incomplete",
      });
    }

    // 3. Validate address
    if (!user.addresses || user.addresses.length === 0) {
      return res.status(400).json({
        success: false,
        message: "At least one address is required",
      });
    }

    // 4. Mark complete
    user.registrationStep = 4;
    user.registrationCompleted = true;

    // 5. Save
    await user.save();

    // 6. Response
    return res.status(200).json({
      success: true,
      message: "Registration completed successfully",
      user: {
        _id: user._id,
        role: user.role,
        name: user.name,
        email: user.email,
        phone: user.phone,
        addresses: user.addresses,
        registrationStep: user.registrationStep,
        registrationCompleted: user.registrationCompleted,
      },
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to complete registration",
    });
  }
};