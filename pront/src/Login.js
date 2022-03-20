import axios from "axios";
import { Cookies } from "react-cookie";
const Cookie = new Cookies();

export default class Login {
  Submit = async (ID, PWD) => {
    const Response = await axios({
      method: "POST",
      url: "http://localhost:8080/login",
      data: `ID=${ID}&PWD=${PWD}`,
    });

    if (Response.data === "") {
      alert("다시 로그인해주세요");
    } else {
      alert("로그인 성공!!");
      document.cookie = `token=${Response.data}`;
    }
  };
  async CheckState() {
    const token = Cookie.get("token");

    const Response = await axios({
      method: "POST",
      url: "http://localhost:8080/Check_State",
      data: `token=${token}`,
    });
    console.log(`Response Answer : ${Response.data}`);
    console.log(Response.data === "");
    if (Response.data === "") {
      return true;
    } else {
      return Response.data;
    }
  }
}
