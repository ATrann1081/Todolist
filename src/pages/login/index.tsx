"use client";

import { useForm } from "react-hook-form";
import LoginLayout from "@/layouts/login";
import styles from "@/styles/login/index.module.scss";

type LoginFormInputs = {
  email: string;
  password: string;
};
const onSubmit = (data: LoginFormInputs) => {
  console.log("Form data:", data);
  // Xử lý logic đăng nhập tại đây...
};
export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  return (
    <LoginLayout>
      {/* Form đăng nhập */}
      <div className={styles.loginForm}>
        <div className={styles.div}>
          <div className={styles.wrapper}>
            <div className={styles.text2}>Sign in</div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.inputGroup1}>
                <label>Email</label>
                <input
                  className={styles.text5}
                  type="email"
                  placeholder="Enter your email"
                  {...register("email", { required: "Vui lòng nhập email" })}
                />
                {errors.email && (
                  <p className={styles.error}>{errors.email.message}</p>
                )}
              </div>

              <div className={styles.inputGroup2}>
                <label>Password</label>
                <input
                  className={styles.text5}
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Vui lòng nhập mật khẩu",
                  })}
                />
                {errors.password && (
                  <p className={styles.error}>{errors.password.message}</p>
                )}
              </div>

              <button type="submit" className={styles.submitButton}>
                <div className={styles.text10}> SIGN IN </div>
              </button>
              <div className={styles.authExtras}>
                <div className={styles.forgot}>Forgot Password?</div>
                <div className={styles.frame}>
                  <div className={styles.text3}> Don’t have an account?</div>
                  <div className={styles.signup}>Sign up </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LoginLayout>
  );
}
