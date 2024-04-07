import React from 'react';

export const isEmailValid = email => {
    if (!email) {
        return "Email is required"
    } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
        return "Incorrect email format"
    }
    return ""

}

export const isNameValid = name => {
    if (name.length < 2) {
        return "Name is required"
    }
    
    return ""
    
}

export const isPasswordValid = password => {
    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (!password) {
        return "Password is required"
    } else if (password.length < 8 && !format.test(password)) {
        return "Password requires at least 8 characters and a special character"
    }
    return ""
}