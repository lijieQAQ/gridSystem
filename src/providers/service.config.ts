

export class ServiceConfig {
    private static ISDEBUG = true;

    public static getUrl() {
        if (this.ISDEBUG) {
            //测试环境URL
            return "http://localhost:8080";
        } else {
            //生产环境URL
            return "http://localhost:8080";
        }

    }


    public static LOGIN = "Login/login";// 登录接口


}
