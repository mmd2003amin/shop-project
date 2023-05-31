import React from 'react';
import { Link } from 'react-router-dom';
//Formik
import { useFormik } from 'formik';
import { basicSchema } from './Validate';

const onSubmit = () => {
    console.log("submit");
}

const SignIn = () => {
    const { values , handleBlur , touched , handleChange , handleSubmit , errors } = useFormik({
        initialValues : {
            email : "",
            password:"",        
        },
        validationSchema : basicSchema,
        onSubmit,
    })

    return (
        <div className="bg-white font-vazirMedium mt-4 pt-5">
            <form className="flex flex-col items-center form-sm lg:form-lg" onSubmit={handleSubmit}>

                <div className="flex w-[62%] li:w-[47%] md:w-1/3 lg:w-[19%] form-item">
                    <span className="rounded-s-lg"><Link to="/signIn">ورود</Link></span>
                    <span className="rounded-e-lg"><Link to="/signUp">ثبت نام</Link></span>
                </div>

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

                {/* Submit */}  
                <button type="submit" className="submit-form">ورود</button>
                
            </form>
        </div>
    );
};

export default SignIn;