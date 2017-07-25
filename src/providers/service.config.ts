

export class ServiceConfig {
    private static ISDEBUG = true;
    public static PAGESIZE = 10;

    public static getUrl() {
        if (this.ISDEBUG) {
            //测试环境URL
            return "http://localhost:8081/gridSystem/";
        } else {
            //生产环境URL
            return "http://localhost:8081/gridSystem/";
        }

    }


    public static GET_GRID = "getGrid";//获取网格系统
    public static DELETE_GRID = "deleteGrid";//删除网格系统


}
