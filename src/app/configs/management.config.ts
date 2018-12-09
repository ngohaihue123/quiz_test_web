import { AppConfig } from "./app.config";
export class ManagementConfig {
    public static GetCategoryUrl: string = `${AppConfig.ApiRoot}/admin/category`;
    public static GetAllCategoryUrl: string = `${AppConfig.ApiRoot}/admin/category/all`;
    public static SaveCategoryUrl: string = `${AppConfig.ApiRoot}/admin/category`;
    public static DeleteCategoryUrl: string = `${AppConfig.ApiRoot}/admin/category/delete`;
    public static GetCategoryCityUrl: string = `${AppConfig.ApiRoot}/admin/category/city`;
    public static GetFqCategoryUrl: string = `${AppConfig.ApiRoot}/admin/category/fq`;
    public static DownloadCategoryUrl: string = `${AppConfig.ApiRoot}/admin/category/download`;

    public static GetIncompleteOrderUrl: string = `${AppConfig.ApiRoot}/admin/order/incomplete`;
    public static NotifyIncompleteBookUrl: string = `${AppConfig.ApiRoot}/admin/order/incomplete/notifyBook`;
    public static NotifyIncompleteShipUrl: string = `${AppConfig.ApiRoot}/admin/order/incomplete/notifyShip`;

    public static GetProvidersUrl: string = `${AppConfig.ApiRoot}/admin/providers`;
    public static GetProviderByIdUrl: string = `${AppConfig.ApiRoot}/admin/providers/get`;
    public static GetProviderAccessTokenUrl: string = `${AppConfig.ApiRoot}/admin/providers/getToken`;
    public static GetProviderMessCodeUrl: string = `${AppConfig.ApiRoot}/admin/providers/getMessCode`;
    public static UpdateProviderByIdUrl: string = `${AppConfig.ApiRoot}/admin/providers/update`;
    public static AddProviderUrl: string = `${AppConfig.ApiRoot}/admin/providers/add`;
    public static DeleteProviderPermanentlyByIdUrl: string = `${AppConfig.ApiRoot}/admin/providers/deletePermanently`;
    public static GenerateProviderByPlaceIdUrl: string = `${AppConfig.ApiRoot}/admin/providers/generateByPlaceId`;

    public static GetAllCountryUrl: string = `${AppConfig.ApiRoot}/admin/country`;
    public static GetCitiesUrl: string = `${AppConfig.ApiRoot}/admin/city`;
    public static GetPlacesUrl: string = `${AppConfig.ApiRoot}/admin/place`;
    public static AddCityUrl: string = `${AppConfig.ApiRoot}/admin/city`;

    public static GetMessagesUrl: string = `${AppConfig.ApiRoot}/admin/messages`;
    public static GetMessageByIdUrl: string = `${AppConfig.ApiRoot}/admin/message`;
    public static CancelMessageByIdUrl: string = `${AppConfig.ApiRoot}/admin/message/cancel`;
    public static SaveMessageUrl: string = `${AppConfig.ApiRoot}/admin/message`;
    public static DeleteMessageByIdUrl: string = `${AppConfig.ApiRoot}/admin/message/delete`;

    public static GetDialogsUrl: string = `${AppConfig.ApiRoot}/admin/dialogs`;
    public static GetDialogsByValueUrl: string = `${AppConfig.ApiRoot}/admin/dialogs/search`;
    public static GetAllDialogsUrl: string = `${AppConfig.ApiRoot}/admin/alldialogs`;
    public static GetDialogByIdUrl: string = `${AppConfig.ApiRoot}/admin/dialog`;
    public static SaveDialogUrl: string = `${AppConfig.ApiRoot}/admin/dialog`;
    public static DeleteDialogByIdUrl: string = `${AppConfig.ApiRoot}/admin/dialog/delete`;

    public static SaveIntentUrl: string = `${AppConfig.ApiRoot}/admin/intent`;
    public static GetIntentsUrl: string = `${AppConfig.ApiRoot}/admin/intents`;
    public static GetDeepIntentById: string = `${AppConfig.ApiRoot}/admin/intents/getById`;
    public static GetIntentInputByContent: string = `${AppConfig.ApiRoot}/admin/intents/inputs/getByContent`;
    public static DeleteIntentByIdUrl: string = `${AppConfig.ApiRoot}/admin/intent/delete`;
    public static GetAllFieldInIntentUrl: string = `${AppConfig.ApiRoot}/admin/intent/allField`;

    public static GetPromotionsUrl: string = `${AppConfig.ApiRoot}/admin/promotions`;
    public static GetPromotionByIdUrl: string = `${AppConfig.ApiRoot}/admin/promotions/get`;
    public static UpdatePromotionByIdUrl: string = `${AppConfig.ApiRoot}/admin/promotions/update`;
    public static GetPromotionCardByIdUrl: string = `${AppConfig.ApiRoot}/admin/promotions/getCardById`;

    public static UploadFileUrl: string = `${AppConfig.ApiRoot}/teacher/file/upload`;
    public static ReadFileUrl: string = `${AppConfig.ApiRoot}/admin/file/read`;
    public static UploadMultipleFilesUrl: string = `${AppConfig.ApiRoot}/admin/file/upload/multiple`;

    public static SpamPromotionQuick: string = `${AppConfig.ApiRoot}/admin/promotions/spamQuick`;
    public static SpamPromotionSlow: string = `${AppConfig.ApiRoot}/admin/promotions/spamSlow`;
    public static SpamPromotionUrl: string = `${AppConfig.ApiRoot}/admin/promotions/spam`;
    public static GetCurrentUsersByProviderIdUrl: string = `${AppConfig.ApiRoot}/admin/promotions/getCurrentCustomers`;

    public static GetStatisticScanAndGetCodeTimesUrl: string = `${AppConfig.ApiRoot}/admin/statistics/scanAndGetCodeTimes`;
    public static GetStatisticNumberNewUsersUrl: string = `${AppConfig.ApiRoot}/admin/statistics/numberNewUsers`;
    public static GetStatisticTotalUser: string = `${AppConfig.ApiRoot}/admin/statistics/totalUser`;
    public static GetStatisticLinkRef: string = `${AppConfig.ApiRoot}/admin/statistics/linkRef`;

    // Context
    public static GetAllContextsUrl: string = `${AppConfig.ApiRoot}/admin/allContexts`;
    public static GetContextsUrl: string = `${AppConfig.ApiRoot}/admin/contexts`;
    public static GetContextUrl: string = `${AppConfig.ApiRoot}/admin/context`;
    public static AddContextUrl: string = `${AppConfig.ApiRoot}/admin/context`;
    public static UpdateContextUrl: string = `${AppConfig.ApiRoot}/admin/context`;
    public static DeleteContextUrl: string = `${AppConfig.ApiRoot}/admin/context`;


    //Tag
    public static GetUserUrl: string = `${AppConfig.ApiRoot}/user/allUser`;
    public static GetUserByIdUrl: string = `${AppConfig.ApiRoot}/user`;
    public static UpdateUserURl: string = `${AppConfig.ApiRoot}/user/update`
    public static AddUserUrl: string = `${AppConfig.ApiRoot}/user/add`
    public static GetTagByIdUrl: string = `${AppConfig.ApiRoot}/admin/tag`;
    public static AddTagUrl: string = `${AppConfig.ApiRoot}/admin/tag`;
    public static UpdateTagUrl: string = `${AppConfig.ApiRoot}/admin/tag`;
    public static DeleteTagUrl: string = `${AppConfig.ApiRoot}/admin/tag`;
    public static GetAllTagsUrl: string = `${AppConfig.ApiRoot}/admin/allTags`
}