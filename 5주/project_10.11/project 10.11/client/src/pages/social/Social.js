import { useEffect } from "react";
import axios from "axios";
import server from "./../../config/server.json";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Social = () => {
    const [cookies, setCookie, removeCookie] = useCookies(["token"]);
    const navigate = useNavigate();
    // window.location.href만 쓰면 현재 경로의 url을 가져오는 역할을 함.
    const KAKAO_CODE = new URL(window.location.href).searchParams.get("code");

    useEffect(() => {
        console.log(KAKAO_CODE);

        axios.get(server.url + "/oauth/kakao/server", {
            params: {
                kakaoCode: KAKAO_CODE
            }
        }).then(res => {
            console.log(res);
            setCookie("token", res.data, { path: "/" });
            navigate("/daily/list");
        })
    }, [])
}

export default Social;