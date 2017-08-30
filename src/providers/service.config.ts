

export class ServiceConfig {
    private static ISDEBUG = true;
    public static PAGESIZE = 10;

    public static getUrl() {
        if (this.ISDEBUG) {
            //测试环境URL
            return "http://192.168.10.55:8080/";
        } else {
            //生产环境URL
            return "http://localhost:8080/";
        }

    }


    public static GET_GRID = "getGrid";//获取网格系统
    public static DELETE_GRID = "deleteGrid";//删除网格系统
    public static GET_MAPBYGRIDID = "getMapByGridId";//根据网格id获取位置点绘制网格
    public static GET_GETGRIDWITHMAP = "getGridWithMap";//根据网格id获取位置点绘制网格
    public static GET_QUOTA = "getQuota";//获取指标列表
    public static GET_NOTICELIST = "getNoticeList";//获取公告列表
    public static GET_METADATALIST = "getMetadataList";//获取字典数据
    public static LOGIN = "login";//登录
    public static EDITGRID = "editGrid";//修改网格


}
