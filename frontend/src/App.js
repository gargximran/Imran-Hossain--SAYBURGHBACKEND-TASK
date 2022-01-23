import {BrowserRouter} from "react-router-dom";
import {useEffect} from "react";
import RootRouter from "./Router";
import postRequest from "./services/requests/postRequest";
import {useDispatch} from "react-redux";
import {loginAction, logoutAction} from "./redux/slices/authSlice";
import refreshToken from "./services/requests/refreshToken";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        postRequest('/api/auth/verify', {}, true)
            .then(res => {
                dispatch(loginAction(res))
            })
            .catch(err => {
                if(err.status_code === 401){
                    refreshToken()
                        .then(res => dispatch(loginAction(res.data.user)))
                        .catch(err => dispatch(logoutAction()))
                }
            })
        // eslint-disable-next-line
    }, [])

    return (
        <BrowserRouter>
            <RootRouter/>
        </BrowserRouter>
    );
}

export default App;
