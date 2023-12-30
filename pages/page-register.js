import Link from "next/link";
import { useState,useEffect } from "react";
import Layout from "../components/layout/Layout";
import { toast } from "react-toastify";
import Preloader from "./../components/elements/Preloader";
import { useRouter } from 'next/router'
import { server } from "../config/index";


function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter()

  useEffect(()=>{
    if (
      localStorage.getItem('userDetails')!==null
      ) {
        router.push('/')
      }
  },[])

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const register = async () => {
    if(name===""){
        toast("Please enter your name.");
        return
    }
    if(phone===""){
      toast("Please enter your phone no.");
      return
  }
    if(email===""){
        toast("Please enter your email.");
        return
    }
    if(username===""){
        toast("Please enter your username.");
        return
    }
    if(password===""){
      toast("Please enter your password.");
      return
  }
    setLoading(true);
    let bodyFormData = new FormData();
    bodyFormData.append("name", name);
    bodyFormData.append("email", email);
    bodyFormData.append("password", password);
    bodyFormData.append("username", username);
    bodyFormData.append("phone", phone);
    bodyFormData.append("action", "user_register");
    const response = await fetch(
      server+"/api/index.php",
      {
        method: "POST",
        body: bodyFormData,
      }
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        if (response.status === 400) {
            toast(response.message);
        }else{
            toast(response.message);
            router.push('/page-login')
        }
      });
  };
  return (
    <>
      {!loading ? (
        <Layout title={"Register"} parent="Home" sub="Pages" subChild="Login & Register">
          <div className="page-content pt-150 pb-150">
            <div className="container">
              <div className="row">
                <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
                  <div className="row">
                    <div className="col-lg-6 pr-30 d-none d-lg-block">
                      <img
                        className="border-radius-15"
                        src="assets/imgs/page/login-1.png"
                        alt=""
                      />
                    </div>
                    <div className="col-lg-6 col-md-8">
                      <div className="login_wrap widget-taber-content background-white">
                        <div className="padding_eight_all bg-white">
                          <div className="heading_s1">
                            <h1 className="mb-5">Register</h1>
                            <p className="mb-30">
                              Already have an account?{" "}
                              <Link href="/page-login">
                                <a>Login here</a>
                              </Link>
                            </p>
                          </div>
                          <form method="post">
                            <div className="form-group">
                              <input
                                type="text"
                                required=""
                                value={name}
                                onChange={(e) => {
                                  handleName(e);
                                }}
                                name="name"
                                placeholder="Full name *"
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="number"
                                required=""
                                value={phone}
                                onChange={(e) => {
                                  handlePhone(e);
                                }}
                                name="phone"
                                placeholder="Phone No. *"
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="email"
                                required=""
                                value={email}
                                onChange={(e) => {
                                  handleEmail(e);
                                }}
                                name="email"
                                placeholder="Email *"
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="text"
                                required=""
                                value={username}
                                onChange={(e) => {
                                  handleUsername(e);
                                }}
                                name="username"
                                placeholder="Username *"
                              />
                            </div>
                            <div className="form-group">
                              <input
                                required=""
                                value={password}
                                onChange={(e) => {
                                  handlePassword(e);
                                }}
                                type="password"
                                name="password"
                                placeholder="Your password *"
                              />
                            </div>
                            {/* <div className="login_footer form-group">
                                                    <div className="chek-form">
                                                        <input type="text" required="" name="email" placeholder="Security code *" />
                                                    </div>
                                                    <span className="security-code">
                                                        <b className="text-new">8</b>
                                                        <b className="text-hot">6</b>
                                                        <b className="text-sale">7</b>
                                                        <b className="text-best">5</b>
                                                    </span>
                                                </div> */}
                            {/* <div className="login_footer form-group mb-50">
                                                    <div className="chek-form">
                                                        <div className="custome-checkbox">
                                                            <input className="form-check-input" type="checkbox" name="checkbox" id="exampleCheckbox1" value="" />
                                                            <label className="form-check-label" htmlFor="exampleCheckbox1"><span>Remember me</span></label>
                                                        </div>
                                                    </div>
                                                    <a className="text-muted" href="#">Forgot password?</a>
                                                </div> */}
                            <div className="form-group">
                              <button
                                type="button"
                                onClick={register}
                                className="btn btn-heading btn-block hover-up"
                                name="login"
                              >
                                Register
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      ) : (
        <Preloader />
      )}
    </>
  );
}

export default Login;
