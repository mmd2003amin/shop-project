import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
    email : yup.string().email("لطفا یک ایمیل معتبر وارد کنید!").required("ایمیل الزامی است"),
    name : yup.string().required("نام الزامی است"),
    password : yup.string().min(5 , "رمز عبور باید شامل حداقل 5 کاراکتر باشد").matches(passwordRules , { message : "رمز عبور باید شامل : حروف کوچک , حروف بزرگ و اعداد باشد"}).required("رمز عبور الزامی است"),
    confirmPassword : yup.string().oneOf([yup.ref('password') , null] , 'پسورد مطابق پسورد بالا نیست').required('تکرار رمز عبور الزامی است')
});