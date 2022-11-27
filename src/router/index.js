import Vue from "vue";
import VueRouter from "vue-router";
/* Auth Pages */
import Login from "../views/Auth/login.vue";
// store
import StoreProduct from "../views/products/product.vue";
import StoreList from "../views/products/list-product.vue";
import StoreOrder from "../views/products/orders.vue";

/* Dashboard Pages */
import DashboardWelcome from "../views/Dashboard/dashboard.vue";
import DashboardOmzet from "../views/Dashboard/omzet-summary.vue";
import DashboardDomestik from "../views/Dashboard/omzet-domestik.vue";
import DashboardOmzetAgen from "../views/Dashboard/omzet-agen-summary.vue";
import DashboardUser from "../views/Dashboard/user-summary.vue";
/* Users Pages */
import UsersAgen from "../views/Users/agen.vue";
import UsersMember from "../views/Users/member.vue";
/* International Pages */
import InternationalOrder from "../views/International/order.vue";
import InternationalTariff from "../views/International/tariff.vue";
import InternationalBooking from "../views/International/booking.vue";
import InternationalRequestAWB from "../views/International/request_awb.vue";
import InternationalScanBarcode from "../views/International/scan_barcode.vue";
import InternationalTracking from "../views/International/tracking.vue";
/* Domestic Pages */
import DomesticOrder from "../views/Domestic/order.vue";
import DomesticBooking from "../views/Domestic/booking.vue";
import DomesticPrintResi from "../views/Domestic/print-resi-domestic.vue";
/* Finance Pages */
import FinancePiutangAgen from "../views/Finance/piutang-agen.vue";
import Hpp from "../views/Finance/hpp.vue";
import FinancePiutangPelanggan from "../views/Finance/piutang-pelanggan.vue";
import FinanceUtangMitra from "../views/Finance/utang-mitra.vue";
import FinanceBiayaOperasional from "../views/Finance/biaya-operasional.vue";
import FinanceTagihanAgen from "../views/Finance/tagihan-agen.vue";
import KategoriBiaya from "../views/Finance/kategori-biaya.vue";
import FinanceAdmin from "../views/Finance/piutang-admin.vue";
import InvoiceAgen from "../views/Finance/laporan-invoice.vue";
import InvoiceMitra from "../views/Finance/invoice-mitra.vue";

/* Report Pages */
import ReportResi from "../views/Report/resi.vue";
import ReportNota from "../views/Report/nota.vue";
import ReportLabelPengiriman from "../views/Report/label-pengiriman.vue";
import ReportProforma from "../views/Report/proforma.vue";
import ReportSuratJalan from "../views/Report/surat-jalan.vue";
import ReportAuthorityLetter from "../views/Report/authority-letter.vue";
import ReportFinance from "../views/Report/finance.vue";
import ReportTabitha from "../views/Report/tabitha.vue";
import ReportCitylink from "../views/Report/citylink.vue";
import ReportDHLNice from "../views/Report/dhl_nice.vue";
/* Print Pages */
import ReportResiPrint from "../views/Report/Print/resi-print.vue";
import ReportNotaPrint from "../views/Report/Print/nota-print.vue";
import ReportLabelPengirimanPrint from "../views/Report/Print/label-pengiriman-print.vue";
import ReportProformaPrint from "../views/Report/Print/proforma-print.vue";
import ReportSuratJalanPrint from "../views/Report/Print/surat-jalan-print.vue";
import ReportInvoiceAgen from "../views/Report/Print/invoice-agen-print.vue";
import ReportAuthorityLetterPrint from "../views/Report/Print/authority-letter-print.vue";
import ReportTabithaPrint from "../views/Report/Print/tabitha-print.vue";
import ReportCitylinkPrint from "../views/Report/Print/citylink-print.vue";
import ReportDHLNicePrint from "../views/Report/Print/dhl-nice-print.vue";
import ReportBackup from "../views/Report/backup.vue";
/* Settings Pages */
import SettingsCourier from "../views/Settings/courier.vue";
import SettingsService from "../views/Settings/service.vue";
import SettingsBranch from "../views/Settings/cabang.vue";
import SettingsJob from "../views/Settings/karir.vue";
import SettingsRoles from "../views/Settings/roles.vue";
import SettingsUsers from "../views/Settings/users.vue";
import SettingsBank from "../views/Settings/bank.vue";
import SettingsBankCourier from "../views/Settings/bank_courier.vue";
import SettingsPickup from "../views/Settings/pickup.vue";
import SettingsPageSetting from "../views/Settings/page_setting.vue";
import SettingsCostCategory from "../views/Settings/cost_category.vue";
import SettingsKaryawan from "../views/Settings/karyawan.vue";
/* Report Agen Pages */
import ReportAgenResi from "../views/ReportAgen/resi.vue";
import ReportAgenNota from "../views/ReportAgen/nota.vue";
import ReportAgenLabelPengiriman from "../views/ReportAgen/label-pengiriman.vue";
import ReportAgenProforma from "../views/ReportAgen/proforma.vue";
import ReportAgenAuthorityLetter from "../views/ReportAgen/authority-letter.vue";
/* Print Agen Pages */
import ReportAgenResiPrint from "../views/ReportAgen/Print/resi-print.vue";
import ReportAgenNotaPrint from "../views/ReportAgen/Print/nota-print.vue";
import ReportAgenLabelPengirimanPrint from "../views/ReportAgen/Print/label-pengiriman-print.vue";
import ReportAgenProformaPrint from "../views/ReportAgen/Print/proforma-print.vue";
import ReportAgenAuthorityLetterPrint from "../views/ReportAgen/Print/authority-letter-print.vue";

Vue.use(VueRouter);

const routes = [
  /*------------*/
  /* Auth Route */
  /*------------*/
  {
    path: "/",
    name: "Login",
    component: Login,
  },

  /*-----------------*/
  /* Store Route */
  /*-----------------*/
  {
    path: "/store",
    redirect: "/store/product",
  },
  {
    path: "/store/product",
    name: "store-product",
    component: StoreProduct,
    meta: {
      requiresAuth: true,
      group: "store",
    },
  },
  {
    path: "/store/list",
    name: "store-list",
    component: StoreList,
    meta: {
      requiresAuth: true,
      group: "store",
    },
  },
  {
    path: "/store/orders",
    name: "store-orders",
    component: StoreOrder,
    meta: {
      requiresAuth: true,
      group: "store",
    },
  },

  /*-----------------*/
  /* Dashboard Route */
  /*-----------------*/
  {
    path: "/dashboard",
    redirect: "/dashboard/omzet",
  },
  {
    path: "/dashboard/welcome",
    name: "dashboard-welcome",
    component: DashboardWelcome,
    meta: {
      requiresAuth: true,
      group: "dashboard",
    },
  },
  {
    path: "/dashboard/omzet",
    name: "dashboard-omzet",
    component: DashboardOmzet,
    meta: {
      requiresAuth: true,
      group: "dashboard",
    },
  },
  {
    path: "/dashboard/domestik",
    name: "dashboard-domestik",
    component: DashboardDomestik,
    meta: {
      requiresAuth: true,
      group: "dashboard",
    },
  },
  {
    path: "/dashboard/omzet-agen",
    name: "dashboard-omzet-agen",
    component: DashboardOmzetAgen,
    meta: {
      requiresAuth: true,
      group: "dashboard",
    },
  },
  {
    path: "/dashboard/user",
    name: "dashboard-user",
    component: DashboardUser,
    meta: {
      requiresAuth: true,
      group: "dashboard",
    },
  },
  /*-------------*/
  /* Users Route */
  /*-------------*/
  {
    path: "/users/",
    redirect: "/users/agen",
  },
  {
    path: "/users/agen",
    name: "users-agen",
    component: UsersAgen,
    meta: {
      requiresAuth: true,
      group: "users",
    },
  },
  {
    path: "/users/member",
    name: "users-member",
    component: UsersMember,
    meta: {
      requiresAuth: true,
      group: "users",
    },
  },
  /*---------------------*/
  /* International Route */
  /*---------------------*/
  {
    path: "/international/",
    redirect: "/international/order",
  },
  {
    path: "/international/order",
    name: "international-order",
    component: InternationalOrder,
    meta: {
      requiresAuth: true,
      group: "international",
    },
  },
  {
    path: "/international/tariff",
    name: "international-tariff",
    component: InternationalTariff,
    meta: {
      requiresAuth: true,
      group: "international",
    },
  },
  {
    path: "/international/booking",
    name: "international-booking",
    component: InternationalBooking,
    meta: {
      requiresAuth: true,
      group: "international",
    },
  },
  {
    path: "/international/request-awb",
    name: "international-request-awb",
    component: InternationalRequestAWB,
    meta: {
      requiresAuth: true,
      group: "international",
    },
  },
  {
    path: "/international/scan-barcode",
    name: "international-scan-barcode",
    component: InternationalScanBarcode,
    meta: {
      requiresAuth: true,
      group: "international",
    },
  },
  {
    path: "/international/tracking",
    name: "international-tracking",
    component: InternationalTracking,
    meta: {
      requiresAuth: true,
      group: "international",
    },
  },

  /*----------------*/
  /* Domestic Route */
  /*----------------*/
  {
    path: "/domestic/",
    redirect: "/domestic/order",
  },
  {
    path: "/domestic/order",
    name: "domestic-order",
    component: DomesticOrder,
    meta: {
      requiresAuth: true,
      group: "domestic",
    },
  },
  {
    path: "/domestic/booking",
    name: "domestic-booking",
    component: DomesticBooking,
    meta: {
      requiresAuth: true,
      group: "domestic",
    },
  },
  {
    path: "/domestic/print-resi-domestik/:id",
    name: "domestic-print-resi",
    component: DomesticPrintResi,
    meta: {
      requiresAuth: true,
      group: "domestic",
    },
  },
  /*---------------*/
  /* Finance Route */
  /*---------------*/
  {
    path: "/finance/",
    redirect: "/finance/piutang-agen",
  },
  {
    path: "/finance/piutang-agen",
    name: "finance-piutang-agen",
    component: FinancePiutangAgen,
    meta: {
      requiresAuth: true,
      group: "finance",
    },
  },
  {
    path: "/finance/hpp",
    name: "finance-hpp",
    component: Hpp,
    meta: {
      requiresAuth: true,
      group: "finance",
    },
  },

  {
    path: "/finance/piutang-pelanggan",
    name: "finance-piutang-pelanggan",
    component: FinancePiutangPelanggan,
    meta: {
      requiresAuth: true,
      group: "finance",
    },
  },
  {
    path: "/finance/piutang-admin",
    name: "piutang-admin",
    component: FinanceAdmin,
    meta: {
      requiresAuth: true,
      group: "finance",
    },
  },
  {
    path: "/finance/list-invoice",
    name: "finance-hpp",
    component: InvoiceMitra,
    meta: {
      requiresAuth: true,
      group: "finance",
    },
  },
  {
    path: "/finance/invoice-agen",
    name: "invoice-agen",
    component: InvoiceAgen,
    meta: {
      requiresAuth: true,
      group: "finance",
    },
  },
  {
    path: "/finance/utang-mitra",
    name: "finance-utang-mitra",
    component: FinanceUtangMitra,
    meta: {
      requiresAuth: true,
      group: "finance",
    },
  },
  {
    path: "/finance/biaya-operasional",
    name: "finance-biaya-operasional",
    component: FinanceBiayaOperasional,
    meta: {
      requiresAuth: true,
      group: "finance",
    },
  },
  {
    path: "/finance/category-operasional",
    name: "biaya-kategori",
    component: KategoriBiaya,
    meta: {
      requiresAuth: true,
      group: "finance",
    },
  },
  {
    path: "/finance/tagihan-agen",
    name: "finance-tagihan-agen",
    component: FinanceTagihanAgen,
    meta: {
      requiresAuth: true,
      group: "finance",
    },
  },
  /*----------------*/
  /* Settings Route */
  /*----------------*/
  {
    path: "/settings/",
    redirect: "/settings/mitra",
  },
  {
    path: "/settings/karyawan",
    name: "settings-karyawan",
    component: SettingsKaryawan,
    meta: {
      requiresAuth: true,
      group: "settings",
    },
  },
  {
    path: "/settings/mitra",
    name: "settings-mitra",
    component: SettingsCourier,
    meta: {
      requiresAuth: true,
      group: "settings",
    },
  },
  {
    path: "/settings/layanan",
    name: "settings-layanan",
    component: SettingsService,
    meta: {
      requiresAuth: true,
      group: "settings",
    },
  },
  {
    path: "/settings/cabang",
    name: "settings-cabang",
    component: SettingsBranch,
    meta: {
      requiresAuth: true,
      group: "settings",
    },
  },
  {
    path: "/settings/karir",
    name: "settings-karir",
    component: SettingsJob,
    meta: {
      requiresAuth: true,
      group: "settings",
    },
  },
  {
    path: "/settings/roles",
    name: "settings-roles",
    component: SettingsRoles,
    meta: {
      requiresAuth: true,
      group: "settings",
    },
  },
  {
    path: "/settings/users",
    name: "settings-users",
    component: SettingsUsers,
    meta: {
      requiresAuth: true,
      group: "settings",
    },
  },
  {
    path: "/settings/bank",
    name: "settings-bank",
    component: SettingsBank,
    meta: {
      requiresAuth: true,
      group: "settings",
    },
  },
  {
    path: "/settings/bank-courier",
    name: "settings-bank-courier",
    component: SettingsBankCourier,
    meta: {
      requiresAuth: true,
      group: "settings",
    },
  },
  {
    path: "/settings/pickup",
    name: "settings-pickup",
    component: SettingsPickup,
    meta: {
      requiresAuth: true,
      group: "settings",
    },
  },
  {
    path: "/settings/page-setting",
    name: "settings-page-setting",
    component: SettingsPageSetting,
    meta: {
      requiresAuth: true,
      group: "settings",
    },
  },
  {
    path: "/settings/cost-category",
    name: "settings-cost-category",
    component: SettingsCostCategory,
    meta: {
      requiresAuth: true,
      group: "settings",
    },
  },
  /*---------------*/
  /* Report Route */
  /*---------------*/
  {
    path: "/report/",
    redirect: "/report/resi",
  },
  {
    path: "/report/resi",
    name: "report-resi",
    component: ReportResi,
    meta: {
      requiresAuth: true,
      group: "report",
    },
  },
  {
    path: "/report/nota",
    name: "report-nota",
    component: ReportNota,
    meta: {
      requiresAuth: true,
      group: "report",
    },
  },
  {
    path: "/report/label-pengiriman",
    name: "report-label-pengiriman",
    component: ReportLabelPengiriman,
    meta: {
      requiresAuth: true,
      group: "report",
    },
  },
  {
    path: "/report/proforma",
    name: "report-proforma",
    component: ReportProforma,
    meta: {
      requiresAuth: true,
      group: "report",
    },
  },
  {
    path: "/report/surat-jalan",
    name: "report-surat-jalan",
    component: ReportSuratJalan,
    meta: {
      requiresAuth: true,
      group: "report",
    },
  },
  {
    path: "/report/authority-letter",
    name: "report-authority-letter",
    component: ReportAuthorityLetter,
    meta: {
      requiresAuth: true,
      group: "report",
    },
  },
  {
    path: "/finance/finance",
    name: "finance-finance",
    component: ReportFinance,
    meta: {
      requiresAuth: true,
      group: "finance",
    },
  },
  {
    path: "/report/tabitha",
    name: "report-tabitha",
    component: ReportTabitha,
    meta: {
      requiresAuth: true,
      group: "report",
    },
  },
  {
    path: "/report/citylink",
    name: "report-citylink",
    component: ReportCitylink,
    meta: {
      requiresAuth: true,
      group: "report",
    },
  },
  {
    path: "/report/dhl-nice",
    name: "report-dhl-nice",
    component: ReportDHLNice,
    meta: {
      requiresAuth: true,
      group: "report",
    },
  },
  {
    path: "/report/backup",
    name: "report-backup",
    component: ReportBackup,
    meta: {
      requiresAuth: true,
      group: "report",
    },
  },
  /*------------------*/
  /* Print Page Route */
  /*------------------*/
  {
    path: "/print/resi/:id",
    name: "print-resi",
    component: ReportResiPrint,
    meta: {
      requiresAuth: true,
      group: "print",
    },
  },
  {
    path: "/print/nota/:id",
    name: "print-nota",
    component: ReportNotaPrint,
    meta: {
      requiresAuth: true,
      group: "print",
    },
  },
  {
    path: "/print/label-pengiriman",
    name: "print-label-pengiriman",
    component: ReportLabelPengirimanPrint,
    meta: {
      requiresAuth: true,
      group: "print",
    },
  },
  {
    path: "/print/proforma/:id",
    name: "print-proforma",
    component: ReportProformaPrint,
    meta: {
      requiresAuth: true,
      group: "print",
    },
  },
  {
    path: "/print/surat-jalan",
    name: "print-surat-jalan",
    component: ReportSuratJalanPrint,
    meta: {
      requiresAuth: true,
      group: "print",
    },
  },
  {
    path: "/print/invoice-agen",
    name: "print-invoice-agen",
    component: ReportInvoiceAgen,
    meta: {
      requiresAuth: true,
      group: "print",
    },
  },
  {
    path: "/print/authority-letter/:id",
    name: "print-authority-letter",
    component: ReportAuthorityLetterPrint,
    meta: {
      requiresAuth: true,
      group: "print",
    },
  },
  {
    path: "/print/tabitha/:id",
    name: "print-tabitha",
    component: ReportTabithaPrint,
    meta: {
      requiresAuth: true,
      group: "print",
    },
  },
  {
    path: "/print/citylink/:id",
    name: "print-citylink",
    component: ReportCitylinkPrint,
    meta: {
      requiresAuth: true,
      group: "print",
    },
  },
  {
    path: "/print/dhl-nice/:id",
    name: "print-dhl-nice",
    component: ReportDHLNicePrint,
    meta: {
      requiresAuth: true,
      group: "print",
    },
  },
  /*---------------*/
  /* Report Route */
  /*---------------*/
  {
    path: "/report-agen/",
    redirect: "/report-agen/resi",
  },
  {
    path: "/report-agen/resi",
    name: "report-agen-resi",
    component: ReportAgenResi,
    meta: {
      requiresAuth: true,
      group: "report-agen",
    },
  },
  {
    path: "/report-agen/nota",
    name: "report-agen-nota",
    component: ReportAgenNota,
    meta: {
      requiresAuth: true,
      group: "report-agen",
    },
  },
  {
    path: "/report-agen/label-pengiriman",
    name: "report-agen-label-pengiriman",
    component: ReportAgenLabelPengiriman,
    meta: {
      requiresAuth: true,
      group: "report-agen",
    },
  },
  {
    path: "/report-agen/proforma",
    name: "report-agen-proforma",
    component: ReportAgenProforma,
    meta: {
      requiresAuth: true,
      group: "report-agen",
    },
  },
  {
    path: "/report-agen/authority-letter",
    name: "report-agen-authority-letter",
    component: ReportAgenAuthorityLetter,
    meta: {
      requiresAuth: true,
      group: "report-agen",
    },
  },
  /*------------------*/
  /* Print Page Route */
  /*------------------*/
  {
    path: "/print-agen/resi/:id",
    name: "print-agen-resi",
    component: ReportAgenResiPrint,
    meta: {
      requiresAuth: true,
      group: "print-agen",
    },
  },
  {
    path: "/print-agen/nota/:id",
    name: "print-agen-nota",
    component: ReportAgenNotaPrint,
    meta: {
      requiresAuth: true,
      group: "print-agen",
    },
  },
  {
    path: "/print-agen/label-pengiriman",
    name: "print-agen-label-pengiriman",
    component: ReportAgenLabelPengirimanPrint,
    meta: {
      requiresAuth: true,
      group: "print-agen",
    },
  },
  {
    path: "/print-agen/proforma/:id",
    name: "print-agen-proforma",
    component: ReportAgenProformaPrint,
    meta: {
      requiresAuth: true,
      group: "print-agen",
    },
  },
  {
    path: "/print-agen/authority-letter/:id",
    name: "print-agen-authority-letter",
    component: ReportAgenAuthorityLetterPrint,
    meta: {
      requiresAuth: true,
      group: "print-agen",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

/*==============================================*/
/* Simple Authentication by Zakiy Fadhil Muhsin */
/* version: 0.0.1                               */
/*==============================================*/
let token = JSON.parse(window.localStorage.getItem("token-auth-jaskipin"));

/* Navigation Guard for Auth Access */
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (token) {
      next();
      return;
    }
    next("/");
  } else {
    next();
  }
});
/*===============================================*/

export default router;
