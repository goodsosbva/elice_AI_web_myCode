import { useEffect } from "react";
import axios from "axios";
import server from "./../../config/server.json";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

let Social = () => {

    const [cookies, setCookie, removeCookie] = useCookies(["token"]);
    const navigate = useNavigate();

    let KAKAO_CODE = new URL(window.location.href)
        .searchParams.get("code");

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
        });


    }, []);
}

export default Social;