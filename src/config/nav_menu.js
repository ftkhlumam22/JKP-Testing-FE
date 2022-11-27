const navMenu = [
  {
    id: "dashboard",
    name: "Dashboard",
    icon: "dashboard",
    link: "/dashboard",
    child: [
      {
        id: "dashboard-welcome",
        name: "Dashboard",
        link: "/dashboard/welcome",
      },
      {
        id: "dashboard-omzet",
        name: "Ringkasan Omzet Luar Negri",
        link: "/dashboard",
      },
      {
        id: "dashboard-domestik",
        name: "Ringkasan Omzet Domestik",
        link: "/dashboard/domestik",
      },
      // {
      //   id: "dashboard-omzet-agen",
      //   name: "Ringkasan Omzet Agen",
      //   link: "/dashboard/omzet-agen",
      // },
      {
        id: "dashboard-user",
        name: "Ringkasan Pengguna Baru",
        link: "/dashboard/user",
      },
      // {
      //   id: "dashboard-cabang",
      //   name: "Filter Cabang",
      //   link: "/dashboard/user",
      // },
    ],
  },
  {
    id: "users",
    name: "Calon Agen",
    icon: "users",
    link: "/users",
    child: [
      {
        id: "users-agen",
        name: "Agen",
        link: "/users/agen",
      },
      {
        id: "users-member",
        name: "Member",
        link: "/users/member",
      },
    ],
  },
  {
    id: "international",
    name: "Luar Negeri",
    icon: "world",
    link: "/international",
    child: [
      {
        id: "international-order",
        name: "Transaksi",
        link: "/international/order",
      },
      {
        id: "international-tariff",
        name: "Tarif",
        link: "/international/tariff",
      },
      {
        id: "international-booking",
        name: "Booking",
        link: "/international/booking",
      },
      {
        id: "international-request-awb",
        name: "Request AWB",
        link: "/international/request-awb",
      },
      {
        id: "international-scan-barcode",
        name: "Scan Barcode",
        link: "/international/scan-barcode",
      },
      {
        id: "international-tracking",
        name: "Tracking",
        link: "/international/tracking",
      },
    ],
  },
  {
    id: "domestic",
    name: "Domestik",
    icon: "truck",
    link: "/domestic",
    child: [
      {
        id: "domestic-order",
        name: "Transaksi",
        link: "/domestic/order",
      },
      {
        id: "domestic-booking",
        name: "Booking",
        link: "/domestic/booking",
      },
    ],
  },
  {
    id: "finance",
    name: "Keuangan",
    icon: "debit",
    link: "/finance",
    child: [
      {
        id: "finance-piutang-agen",
        name: "Piutang",
        link: "/finance/piutang-agen",
        subChild: [
          {
            id: "finance-piutang-agen",
            name: "Piutang Agen",
            link: "/finance/piutang-agen",
          },
          {
            id: "piutang-admin",
            name: "Hutang Admin",
            link: "/finance/piutang-admin",
          },
          {
            id: "finance-piutang-pelanggan",
            name: "Piutang Pelanggan",
            link: "/finance/piutang-pelanggan",
          },
        ],
      },
      {
        id: "finance-hpp",
        name: "Hpp",
        link: "/finance/hpp",
      },
      {
        id: "finance-hpp",
        name: "List Invoice",
        link: "/finance/list-invoice",
      },
      {
        id: "invoice-agen",
        name: "Invoice Agen",
        link: "/finance/invoice-agen",
      },
      {
        id: "finance-utang-mitra",
        name: "Tagihan Mitra",
        link: "/finance/utang-mitra",
      },
      {
        id: "finance-biaya-operasional",
        name: "Biaya Operasional",
        link: "/finance/biaya-operasional",
      },
      {
        id: "biaya-kategori",
        name: "Kategori Biaya",
        link: "/finance/category-operasional",
      },
      {
        id: "finance-finance",
        name: "Laporan Keuangan Harian",
        link: "/finance/finance",
      },
      {
        id: "finance-tagihan-agen",
        name: "Tagihan Agen",
        link: "/finance/tagihan-agen",
      },
    ],
  },
  {
    id: "report",
    name: "Laporan",
    icon: "report",
    link: "/report",
    child: [
      {
        id: "report-resi",
        name: "Resi",
        link: "/report/resi",
      },
      {
        id: "report-nota",
        name: "Nota",
        link: "/report/nota",
      },
      {
        id: "report-label-pengiriman",
        name: "Label Pengiriman",
        link: "/report/label-pengiriman",
      },
      {
        id: "report-proforma",
        name: "Proforma Invoice",
        link: "/report/proforma",
      },
      {
        id: "report-surat-jalan",
        name: "Surat Jalan",
        link: "/report/surat-jalan",
      },
      {
        id: "report-authority-letter",
        name: "Authority Letter",
        link: "/report/authority-letter",
      },
      {
        id: "report-dhl-nice",
        name: "DHL & Nice Express",
        link: "/report/dhl-nice",
      },
      {
        id: "report-backup",
        name: "Backup Data",
        link: "/report/backup",
      },
      // ,{
      //     id: 'report-tabitha',
      //     name: 'Tabitha',
      //     link: '/report/tabitha'
      // },{
      //     id: 'report-citylink',
      //     name: 'Citylink',
      //     link: '/report/citylink'
      // }
    ],
  },
  {
    id: "settings",
    name: "Pengaturan",
    icon: "settings",
    link: "/settings",
    child: [
      {
        id: "settings-mitra",
        name: "Mitra Ekspedisi",
        link: "/settings/mitra",
      },
      {
        id: "settings-karyawan",
        name: "Karyawan",
        link: "/settings/karyawan",
      },
      {
        id: "settings-layanan",
        name: "Layanan",
        link: "/settings/layanan",
      },
      {
        id: "settings-cabang",
        name: "Cabang",
        link: "/settings/cabang",
      },
      {
        id: "settings-karir",
        name: "Karir",
        link: "/settings/karir",
      },
      {
        id: "settings-roles",
        name: "Hak Akses",
        link: "/settings/roles",
      },
      {
        id: "settings-users",
        name: "Akun Pengguna",
        link: "/settings/users",
      },
      {
        id: "settings-bank",
        name: "Bank",
        link: "/settings/bank",
      },
      {
        id: "settings-bank-courier",
        name: "Bank Mitra",
        link: "/settings/bank-courier",
      },
      {
        id: "settings-pickup",
        name: "Pickup",
        link: "/settings/pickup",
      },
      {
        id: "settings-page-setting",
        name: "Website",
        link: "/settings/page-setting",
      },
      {
        id: "settings-cost-category",
        name: "Kategori Biaya",
        link: "/settings/cost-category",
      },
      {
        id: "type-pengguna",
        name: "Tipe Pengguna",
        link: "/settings/type-pengguna",
      },
    ],
  },
  {
    id: "report-agen",
    name: "Laporan Agen",
    icon: "report",
    link: "/report-agen",
    child: [
      {
        id: "report-agen-resi",
        name: "Resi (Agen)",
        link: "/report-agen/resi",
      },
      {
        id: "report-agen-nota",
        name: "Nota (Agen)",
        link: "/report-agen/nota",
      },
      {
        id: "report-agen-label-pengiriman",
        name: "Label Pengiriman (Agen)",
        link: "/report-agen/label-pengiriman",
      },
      {
        id: "report-agen-proforma",
        name: "Proforma Invoice (Agen)",
        link: "/report-agen/proforma",
      },
      {
        id: "report-agen-authority-letter",
        name: "Authority Letter (Agen)",
        link: "/report-agen/authority-letter",
      },
    ],
  },
  {
    id: "store",
    name: "Store",
    icon: "cart",
    link: "/store",
    child: [
      {
        id: "store-product",
        name: "Product",
        link: "/store/product",
      },
      {
        id: "store-list",
        name: "List Product",
        link: "/store/list",
      },
      {
        id: "store-orders",
        name: "Order Product",
        link: "/store/orders",
      },
    ],
  },
];

export default navMenu;
