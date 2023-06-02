import { useFormik } from 'formik';
import React from 'react';
import { Link } from 'react-router-dom';
import { basicSchema } from './Validate';

const onSubmit = () => {
    console.log("submiitt");
}

const SignUp = () => {
    const { values , handleBlur , touched , handleChange , handleSubmit , errors } = useFormik({
        initialValues : {
            name : "",
            email : "",
            password:"",
            confirmPassword:"",         
        },
        validationSchema : basicSchema,
        onSubmit,
    })
    return (
        <div className="bg-white font-vazirMedium mt-6 pt-4 pb-5">
            <form className="flex flex-col items-center form-sm lg:form-lg" onSubmit={handleSubmit}>

                <div className="flex mb-8 w-[62%] li:w-[47%] md:w-1/3 lg:w-[19%] form-item">
                    <span className="rounded-s-lg"><Link to="/signIn">ورود</Link></span>
                    <span className="rounded-e-lg"><Link to="/signUp">ثبت نام</Link></span>
                </div>

                {/* Name */}
                <input 
                 className={`${errors.name && touched.name ? "form-unCompleted" : "form-completed"}`}
                 value={values.name}
                 onChange={handleChange} 
                 onBlur={handleBlur}
                 id="name" 
                 type="text" 
                 placeholder="نام"
                />
                {errors.name && touched.name && <span className="text-red-600 text-[11px] md:text-[16px]">{errors.name}</span>}

                {/* Email */}
                <input 
                 className={errors.email && touched.email ? "form-unCompleted" : "form-completed"}
                 value={values.email} 
                 onChange={handleChange} 
                 onBlur={handleBlur}
                 id="email" 
                 type="email" 
                 placeholder="ایمیل"
                />
                {errors.email && touched.email && <span className="text-red-600 text-[11px] md:text-[16px]">{errors.email}</span>}

                {/* Password */}
                <input 
                 className={errors.password && touched.password ? "form-unCompleted" : "form-completed"}
                 value={values.password} 
                 onChange={handleChange} 
                 onBlur={handleBlur}
                 id="password" 
                 type="password" 
                 placeholder="رمز عبور"
                />
                {errors.password && touched.password && <span className="text-red-600 text-[11px] md:text-[16px]">{errors.password}</span>}
                
                {/* ConfirmPassword */}
                <input 
                 className={errors.confirmPassword && touched.confirmPassword ? "form-unCompleted" : "form-completed"}
                 value={values.confirmPassword} 
                 onChange={handleChange} 
                 onBlur={handleBlur}
                 id="confirmPassword" 
                 type="password" 
                 placeholder="تکرار رمز عبور"
                />
                {errors.confirmPassword && touched.confirmPassword && <span className="text-red-600 text-[11px] md:text-[16px]">{errors.confirmPassword}</span>}

                {/* Subnit */}
                <button type="submit" className="submit-form">ثبت نام</button>

            </form>
        </div>
    );
};

export default SignUp;