<template>
  <div id="nota_label">
    <svg class="Rectangle_1">
      <rect
        fill="transparent"
        stroke="rgba(0,0,0,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Rectangle_1"
        rx="0"
        ry="0"
        x="0"
        y="0"
        width="869"
        height="138"
      ></rect>
    </svg>
    <div id="JASKIPIN_COURIER_EXPRESS">
      <span>JASKIPIN EXPRESS INDONESIA</span>
    </div>
    <div id="www_Jaskipin_co_id">
      <span>www.jaskipin.co.id</span>
    </div>
    <div id="JASKIPIN_COURIER_EXPRESS_Label">
      <span>JASKIPIN EXPRESS INDONESIA</span>
    </div>
    <div id="www_Jaskipin_co_id_label">
      <span>www.jaskipin.co.id</span>
    </div>
    <div id="AWB__No_______________________">
      <span>AWB. No </span>
    </div>
    <!-- <div id="Mitra_Expedisi_______________">
            <span>Mitra Expedisi               </span>
        </div> -->
    <svg class="Rectangle_2">
      <rect
        fill="rgba(13,49,117,1)"
        stroke="rgba(0,0,0,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Rectangle_2"
        rx="0"
        ry="0"
        x="0"
        y="0"
        width="869"
        height="24"
      ></rect>
    </svg>
    <div id="Shipment_Number">
      <span>Shipment Number</span>
    </div>
    <div id="JCRX0000000">
      <!-- <span><?php echo $id_order;?></span> -->
      {{ data.shipment_number }}
    </div>
    <svg class="Path_1" viewBox="129 182 1 137">
      <path
        fill="transparent"
        stroke="rgba(0,0,0,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Path_1"
        d="M 129 181.9999847412109 C 129 181.9999847412109 129 284.75 129 319"
      ></path>
    </svg>
    <svg class="Path_2" viewBox="129 182 1 137">
      <path
        fill="transparent"
        stroke="rgba(0,0,0,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Path_2"
        d="M 129 181.9999847412109 C 129 181.9999847412109 129 284.75 129 319"
      ></path>
    </svg>
    <svg class="Path_3" viewBox="129 182 1 137">
      <path
        fill="transparent"
        stroke="rgba(0,0,0,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Path_3"
        d="M 129 181.9999847412109 C 129 181.9999847412109 129 284.75 129 319"
      ></path>
    </svg>
    <svg class="Line_1" viewBox="0 0 1 21">
      <path
        fill="transparent"
        stroke="rgba(255,255,255,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Line_1"
        d="M 0 0 L 0 21"
      ></path>
    </svg>
    <div id="ID1">
      <span>1</span>
    </div>
    <svg class="Line_2" viewBox="0 0 1 21">
      <path
        fill="transparent"
        stroke="rgba(255,255,255,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Line_2"
        d="M 0 0 L 0 21"
      ></path>
    </svg>
    <div id="ID2">
      <span>2</span>
    </div>
    <svg class="Line_3" viewBox="0 0 1 21">
      <path
        fill="transparent"
        stroke="rgba(255,255,255,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Line_3"
        d="M 0 0 L 0 21"
      ></path>
    </svg>
    <div id="From__Sender_">
      <span>From (Sender)</span>
    </div>
    <div id="To__Receiver_">
      <span>To (Receiver)</span>
    </div>
    <div id="__31532637802">
      <!-- <span>: <?php echo $awb_no;?></span> -->
      : {{ data.awb_no }}
    </div>
    <!-- <div id="__Aramex"> -->
    <!-- <span>: <?php echo $mitra_expedisi;?></span> -->
    <!-- : {{ courierData.courier_name }}
        </div> -->
    <div id="Name_______________">
      <span>Name </span>
    </div>
    <div id="Company_______________">
      <span>Company </span>
    </div>
    <div id="Sender_Address_______________">
      <span>Sender Address </span>
    </div>
    <div id="AIRA_B___MAMA_AZMI____________">
      <!-- <span><?php echo $nama_pengirim;?>               </span> -->
      {{ data.sender_name }}
    </div>
    <div id="Name________________">
      <span>Name </span>
    </div>
    <div id="SITI_HAJAR_OMAR">
      <!-- <span><?php echo $nama_penerima;?></span> -->
      {{ data.recipient_name }}
    </div>
    <div id="Company________________">
      <span>Company </span>
    </div>
    <div id="Delivery_Address______________">
      <span>Delivery Address </span>
    </div>
    <div id="ID36__JALAN_LANAI_KIARA__KIARA">
      <!-- <span><?php echo wordwrap($alamat_penerima,60, "<br>", true );?></span> -->
      {{ data.recipient_address }}
    </div>
    <div id="Cirebon_West_Java_Indonesia">
      <!-- <span><span><?php echo wordwrap($alamat_pengirim,45, "<br>", true );?></span></span> -->
      <!-- {{ data.sender_address }} -->
      Indonesia
    </div>
    <div id="Phone_No_">
      <span>Phone No.</span>
    </div>
    <div id="ID081222111346">
      <!-- <span><?php echo $telp_pengirim;?></span> -->
      {{ data.sender_phone }}
    </div>
    <svg class="Rectangle_10">
      <rect
        fill="transparent"
        stroke="rgba(0,0,0,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Rectangle_10"
        rx="0"
        ry="0"
        x="0"
        y="0"
        width="869"
        height="18"
      ></rect>
    </svg>
    <svg class="Rectangle_11">
      <rect
        fill="rgba(13,49,117,1)"
        stroke="rgba(0,0,0,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Rectangle_11"
        rx="0"
        ry="0"
        x="0"
        y="0"
        width="869"
        height="24"
      ></rect>
    </svg>
    <svg class="Line_4" viewBox="0 0 1 21.17">
      <path
        fill="transparent"
        stroke="rgba(255,255,255,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Line_4"
        d="M 0 0 L 0 21.16986083984375"
      ></path>
    </svg>
    <div id="ID3">
      <span>3</span>
    </div>
    <svg class="Line_5" viewBox="0 0 1 21.17">
      <path
        fill="transparent"
        stroke="rgba(255,255,255,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Line_5"
        d="M 0 0 L 0 21.16986083984375"
      ></path>
    </svg>
    <div id="ID4">
      <span>4</span>
    </div>
    <svg class="Line_6" viewBox="0 0 1 21.17">
      <path
        fill="transparent"
        stroke="rgba(255,255,255,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Line_6"
        d="M 0 0 L 0 21.16986083984375"
      ></path>
    </svg>
    <div id="Service___Payment">
      <span>Service & Payment</span>
    </div>
    <div id="Weight__Volume_and_Drescriptio">
      <span>Weight, Volume and Drescription</span>
    </div>
    <div id="Phone_No__bn">
      <span>Phone No.</span>
    </div>
    <div id="_60123729577">
      <!-- <span><?php echo $telp_penerima?></span> -->
      {{ data.recipient_phone }}
    </div>
    <svg class="Rectangle_12">
      <rect
        fill="transparent"
        stroke="rgba(0,0,0,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Rectangle_12"
        rx="0"
        ry="0"
        x="0"
        y="0"
        width="869"
        height="102"
      ></rect>
    </svg>
    <svg class="Path_4" viewBox="129 182 1 102">
      <path
        fill="transparent"
        stroke="rgba(0,0,0,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Path_4"
        d="M 129 182.0000152587891 C 129 182.0000152587891 129 258.5 129 284"
      ></path>
    </svg>
    <svg class="Path_5" viewBox="129 182 1 102">
      <path
        fill="transparent"
        stroke="rgba(0,0,0,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Path_5"
        d="M 129 182.0000152587891 C 129 182.0000152587891 129 258.5 129 284"
      ></path>
    </svg>
    <svg class="Path_7" viewBox="129 182 1 102">
      <path
        fill="transparent"
        stroke="rgba(0,0,0,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Path_7"
        d="M 129 182.0000152587891 C 129 182.0000152587891 129 258.5 129 284"
      ></path>
    </svg>
    <svg class="Path_8" viewBox="129 182 1 102">
      <path
        fill="transparent"
        stroke="rgba(0,0,0,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Path_8"
        d="M 129 182.0000152587891 C 129 182.0000152587891 129 258.5 129 284"
      ></path>
    </svg>
    <svg class="Path_9" viewBox="129 182 1 102">
      <path
        fill="transparent"
        stroke="rgba(0,0,0,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Path_9"
        d="M 129 182.0000152587891 C 129 182.0000152587891 129 216.7516021728516 129 247.5530242919922 C 129 261.9535217285156 129 275.6868896484375 129 284"
      ></path>
    </svg>
    <div id="Serevice">
      <span>Service</span>
    </div>
    <svg class="Rectangle_14">
      <rect
        fill="rgba(255,255,255,1)"
        stroke="rgba(0,0,0,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Rectangle_14"
        rx="0"
        ry="0"
        x="0"
        y="0"
        width="21"
        height="11"
      ></rect>
      <!-- <?php 
        if($jenis_layanan=='Document')
        {
            echo'<text x="6" y="14" fill="black">*</text>';
        }
        ?> -->
      <template v-if="data.service_type == 'Document'">
        <text x="6" y="14" fill="black">*</text>
      </template>
    </svg>
    <svg class="Rectangle_14_bx">
      <rect
        fill="rgba(255,255,255,1)"
        stroke="rgba(0,0,0,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Rectangle_14_bx"
        rx="0"
        ry="0"
        x="0"
        y="0"
        width="21"
        height="11"
      ></rect>
      <!-- <?php 
        if($jenis_layanan=='Garment')
        {
            echo'<text x="6" y="14" fill="black">*</text>';
        }
        ?> -->
      <template v-if="data.service_type == 'Garment'">
        <text x="6" y="14" fill="black">*</text>
      </template>
    </svg>
    <svg class="Rectangle_14_by">
      <rect
        fill="rgba(255,255,255,1)"
        stroke="rgba(0,0,0,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Rectangle_14_by"
        rx="0"
        ry="0"
        x="0"
        y="0"
        width="21"
        height="11"
      ></rect>
      <!-- <?php 
            if($jenis_layanan=='Herbal')
            {
                echo'<text x="6" y="14" fill="black">*</text>';
            }
            ?> -->
      <template v-if="data.service_type == 'Herbal'">
        <text x="6" y="14" fill="black">*</text>
      </template>
    </svg>
    <svg class="Rectangle_14_bz">
      <rect
        fill="rgba(255,255,255,1)"
        stroke="rgba(0,0,0,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Rectangle_14_bz"
        rx="0"
        ry="0"
        x="0"
        y="0"
        width="21"
        height="11"
      ></rect>
      <!-- <?php 
            if($jenis_layanan=='Other Services')
            {
                echo'<text x="6" y="14" fill="black">*</text>';
            }
            ?> -->
      <template v-if="data.service_type == 'Other Services'">
        <text x="6" y="14" fill="black">*</text>
      </template>
    </svg>
    <div id="Document">
      <span>Document</span>
    </div>
    <div id="Garment">
      <span>Garment</span>
    </div>
    <div id="Herbal">
      <span>Herbal</span>
    </div>
    <div id="Other_Service">
      <span>Other Service</span>
    </div>
    <div id="Cash">
      <span>Cash</span>
    </div>
    <div id="Transfer">
      <span>Transfer</span>
    </div>
    <div id="Payment">
      <span>Payment</span>
    </div>
    <div id="No__Of_pieces_______________">
      <span>No. Of pieces </span>
    </div>
    <div id="Weight____Kg________________">
      <span
        >Weight<br />
        (Kg)
      </span>
    </div>
    <div id="___Dimension_L_x_W_x_H_Cm_____">
      <span> Dimension<br />L x W x H(Cm) </span>
    </div>
    <div id="___Volumetric__Change_weight__">
      <span> Volumetric/<br />Change weight </span>
    </div>
    <div id="___Charge_Price___________IDR_">
      <span>
        Charge Price<br />
        ({{ $route.query.type == "IDR" ? "IDR" : "USD" }})
      </span>
    </div>
    <div id="ID41">
      <!-- <span><?=$koli; ?></span> -->
      {{ data.bag_amount }}
    </div>
    <div id="ID12">
      <!-- <span><?php echo $berat;?></span> -->
      {{ data.weight }}
    </div>
    <div id="ID20">
      <!-- <span><?php echo $total;?></span> -->
      <div v-for="(item, index) in data.detail_volume" :key="index">
        <span v-if="item.panjang && item.lebar && item.tinggi">
          {{
            parseInt(item.berat) >
            (parseInt(item.panjang) *
              parseInt(item.lebar) *
              parseInt(item.tinggi)) /
              5000
              ? item.berat
              : (parseInt(item.panjang) *
                  parseInt(item.lebar) *
                  parseInt(item.tinggi)) /
                5000
          }}
        </span>
        <span v-else>0</span>
      </div>
    </div>

    <div id="Rp">
      <span>{{ $route.query.type == "IDR" ? "IDR" : "USD" }}</span>
    </div>
    <div id="ID30">
      <!-- <span><?php echo "".number_format($ongkir, 0, ".", ".");?></span> -->
      {{ data.shipment_fee ? formatPrice(data.shipment_fee) : "Rp0" }}
    </div>
    <svg class="Rectangle_16">
      <rect
        fill="rgba(13,49,117,1)"
        stroke="rgba(0,0,0,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Rectangle_16"
        rx="0"
        ry="0"
        x="0"
        y="0"
        width="869"
        height="24"
      ></rect>
    </svg>
    <svg class="Line_7" viewBox="0 0 1 22">
      <path
        fill="transparent"
        stroke="rgba(255,255,255,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Line_7"
        d="M 0 0 L 0 22"
      ></path>
    </svg>
    <div id="ID5">
      <span>5</span>
    </div>
    <svg class="Line_8" viewBox="0 0 1 23">
      <path
        fill="transparent"
        stroke="rgba(255,255,255,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Line_8"
        d="M 0 0 L 0 23"
      ></path>
    </svg>
    <div id="ID7">
      <span>7</span>
    </div>
    <svg class="Line_9" viewBox="0 0 1 22">
      <path
        fill="transparent"
        stroke="rgba(255,255,255,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Line_9"
        d="M 0 0 L 0 22"
      ></path>
    </svg>
    <div id="Received_By_Courier">
      <span>Received By Courier</span>
    </div>
    <div id="Description_of_Contents">
      <span>Description of Contents</span>
    </div>
    <svg class="Rectangle_17">
      <rect
        fill="transparent"
        stroke="rgba(0,0,0,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Rectangle_17"
        rx="0"
        ry="0"
        x="0"
        y="0"
        width="869"
        height="190"
      ></rect>
    </svg>
    <svg class="Path_10" viewBox="129 182 1 72">
      <path
        fill="transparent"
        stroke="rgba(0,0,0,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Path_10"
        d="M 129 182 C 129 182 129 235.9999847412109 129 370"
      ></path>
    </svg>
    <svg class="Path_11" viewBox="129 182 1 72">
      <path
        fill="transparent"
        stroke="rgba(0,0,0,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Path_11"
        d="M 129 182 C 129 182 129 235.9999847412109 129 370"
      ></path>
    </svg>
    <svg class="Path_12" viewBox="129 182 1 72">
      <path
        fill="transparent"
        stroke="rgba(0,0,0,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Path_12"
        d="M 129 182 C 129 182 129 235.9999847412109 129 370"
      ></path>
    </svg>
    <svg class="Path_13" viewBox="129 182 1 72">
      <path
        fill="transparent"
        stroke="rgba(0,0,0,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Path_13"
        d="M 129 182 C 129 182 129 235.9999847412109 129 370"
      ></path>
    </svg>
    <svg class="Line_10" viewBox="0 0 868.85 1">
      <path
        fill="transparent"
        stroke="rgba(0,0,0,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Line_10"
        d="M 0 0 L 868.8499145507813 0"
      ></path>
    </svg>
    <svg class="Line_11" viewBox="0 0 868.85 1">
      <path
        fill="transparent"
        stroke="rgba(0,0,0,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Line_11"
        d="M 0 0 L 868.8499145507813 0"
      ></path>
    </svg>
    <svg class="Line_12" viewBox="0 0 496.85 1">
      <path
        fill="transparent"
        stroke="rgba(0,0,0,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Line_12"
        d="M 0 0 L 496.8499145507813 0"
      ></path>
    </svg>
    <svg class="Line_13" viewBox="0 0 217 1">
      <path
        fill="transparent"
        stroke="rgba(0,0,0,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Line_13"
        d="M 0 0 L 217 0"
      ></path>
    </svg>
    <svg class="Line_14" viewBox="0 0 371.5 1">
      <path
        fill="transparent"
        stroke="rgba(0,0,0,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Line_14"
        d="M 0 0 L 371.5 0"
      ></path>
    </svg>
    <svg class="Path_14" viewBox="129 182 1 16.5">
      <path
        fill="transparent"
        stroke="rgba(0,0,0,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Path_14"
        d="M 129 182 C 129 182 129 194.375 129 198.5"
      ></path>
    </svg>
    <svg class="Line_15" viewBox="0 0 1 22">
      <path
        fill="transparent"
        stroke="rgba(255,255,255,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Line_15"
        d="M 0 0 L 0 22"
      ></path>
    </svg>
    <div id="ID6">
      <span>6</span>
    </div>
    <svg class="Line_16" viewBox="0 0 1 22">
      <path
        fill="transparent"
        stroke="rgba(255,255,255,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Line_16"
        d="M 0 0 L 0 22"
      ></path>
    </svg>
    <svg class="Line_17" viewBox="0 0 1 22">
      <path
        fill="transparent"
        stroke="rgba(255,255,255,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Line_17"
        d="M 0 0 L 0 22"
      ></path>
    </svg>
    <div id="Name________________c">
      <span>Name </span>
    </div>
    <div id="Date">
      <span>Date</span>
    </div>
    <div id="Signature">
      <span>Signature</span>
    </div>
    <div id="ID20_11_2019">
      <!-- <span><?php echo date('d F Y', strtotime($tgl_order)) ;?></span> -->
      {{ formatDate(data.createdAt) }}
    </div>
    <div id="signature-name">
      <!-- <span><?=$this->session->userdata('telepon') ?>               </span> -->
      {{ data.agen_general ? profileData.phone : data.agen.phone }}
    </div>
    <div id="Name________________da">
      <span>Name </span>
    </div>
    <div id="AIRA_B___MAMA_AZMI_____________c">
      <!-- <span><?php echo $nama_penerima;?>               </span> -->
      {{ data.recipient_name }}
    </div>
    <div id="ID1_da">
      <!-- <?php
        foreach ($deskripsi->result_array() as $sws):
                            $id_order=$sws['id_order'];
                            $nama_barang=$sws['nama_barang'];
                            
                    ?>
            <span><?php echo $nama_barang;?><br> </span>
            <?php endforeach; ?> -->
      <h4
        v-for="(item, index) in data.detail_item"
        :key="index"
        style="line-height: 18px"
      >
        {{ item.item_name }}
      </h4>
    </div>
    <div id="ID6_db">
      <span></span>
    </div>
    <div id="US_">
      <span></span>
    </div>
    <div id="US__dd">
      <span></span>
    </div>
    <div id="US__de">
      <span></span>
    </div>
    <div id="US__df">
      <span></span>
    </div>
    <div id="_" style="left: 765px">
      <!-- <?php
        foreach ($deskripsi->result_array() as $sws):
                            $id_order=$sws['id_order'];
                            
                            $total_nilai=$sws['total_nilai'];
                            
                    ?>
            <span><?php echo "US$  ".$total_nilai;?><br> </span>
            <?php endforeach; ?> -->
      <h4
        v-for="(item, index) in data.detail_item"
        :key="index"
        style="line-height: 18px"
      >
        {{ $route.query.type == "IDR" ? "IDR" : "USD"
        }}{{ item.total_value ? formatPrice(item.total_value) : "0" }}
      </h4>
    </div>
    <div id="__dh">
      <span></span>
    </div>
    <div id="__di">
      <span></span>
    </div>
    <div id="__dj">
      <span></span>
    </div>
    <div id="Signature__Sender_">
      <span>Signature (Sender)</span>
    </div>
    <div id="Customs_Value">
      <span>Customs Value</span>
    </div>
    <div id="Credit">
      <span>Credit</span>
    </div>
    <svg class="Rectangle_18">
      <rect
        fill="rgba(255,255,255,1)"
        stroke="rgba(0,0,0,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Rectangle_18"
        rx="0"
        ry="0"
        x="0"
        y="0"
        width="21"
        height="11"
      ></rect>
      <!-- <?php 
            if($metode_pembayaran=='cash')
            {
                echo'<text x="6" y="14" fill="black">*</text>';
            }
            ?> -->
      <template v-if="data.payment_type == 'Cash'">
        <text x="6" y="14" fill="black">*</text>
      </template>
    </svg>
    <svg class="Rectangle_19">
      <rect
        fill="rgba(255,255,255,1)"
        stroke="rgba(0,0,0,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Rectangle_19"
        rx="0"
        ry="0"
        x="0"
        y="0"
        width="21"
        height="11"
      ></rect>
      <!-- <?php 
            if($metode_pembayaran=='transfer')
            {
                echo'<text x="6" y="14" fill="black">*</text>';
            }
            ?> -->
      <template v-if="data.payment_type == 'Transfer'">
        <text x="6" y="14" fill="black">*</text>
      </template>
    </svg>
    <svg class="Rectangle_20">
      <rect
        fill="rgba(255,255,255,1)"
        stroke="rgba(0,0,0,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Rectangle_20"
        rx="0"
        ry="0"
        x="0"
        y="0"
        width="21"
        height="11"
      ></rect>
      <!-- <?php 
            if($metode_pembayaran=='credit')
            {
                echo'<text x="6" y="14" fill="black">*</text>';
            }
            ?> -->
      <template v-if="data.payment_type == 'Credit'">
        <text x="6" y="14" fill="black">*</text>
      </template>
    </svg>
    <div id="exluding_insurance_and_import_">
      <span
        >exluding insurance and import tax if required by destination
        country</span
      >
    </div>
    <div id="Repeat_Grid_1">
      <div id="Repeat_Grid_1_0">
        <svg class="Line_18" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_1">
        <svg class="Line_18_dv" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_dv"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_2">
        <svg class="Line_18_dx" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_dx"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_3">
        <svg class="Line_18_dz" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_dz"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_4">
        <svg class="Line_18_d" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_d"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_5">
        <svg class="Line_18_ea" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ea"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_6">
        <svg class="Line_18_eb" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_eb"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_7">
        <svg class="Line_18_ec" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ec"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_8">
        <svg class="Line_18_ed" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ed"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_9">
        <svg class="Line_18_ee" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ee"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_10">
        <svg class="Line_18_ef" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ef"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_11">
        <svg class="Line_18_eg" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_eg"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_12">
        <svg class="Line_18_eh" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_eh"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_13">
        <svg class="Line_18_ej" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ej"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_14">
        <svg class="Line_18_el" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_el"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_15">
        <svg class="Line_18_en" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_en"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_16">
        <svg class="Line_18_ep" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ep"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_17">
        <svg class="Line_18_er" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_er"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_18">
        <svg class="Line_18_et" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_et"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_19">
        <svg class="Line_18_ev" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ev"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_20">
        <svg class="Line_18_ex" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ex"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_21">
        <svg class="Line_18_ez" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ez"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_22">
        <svg class="Line_18_e" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_e"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_23">
        <svg class="Line_18_fa" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_fa"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_24">
        <svg class="Line_18_fb" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_fb"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_25">
        <svg class="Line_18_fc" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_fc"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_26">
        <svg class="Line_18_fd" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_fd"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_27">
        <svg class="Line_18_fe" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_fe"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_28">
        <svg class="Line_18_ff" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ff"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_29">
        <svg class="Line_18_fg" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_fg"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_30">
        <svg class="Line_18_fh" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_fh"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_31">
        <svg class="Line_18_fj" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_fj"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_32">
        <svg class="Line_18_fl" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_fl"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_33">
        <svg class="Line_18_fn" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_fn"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_34">
        <svg class="Line_18_fp" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_fp"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_35">
        <svg class="Line_18_fr" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_fr"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_36">
        <svg class="Line_18_ft" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ft"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_37">
        <svg class="Line_18_fv" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_fv"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_38">
        <svg class="Line_18_fx" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_fx"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_39">
        <svg class="Line_18_fz" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_fz"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_40">
        <svg class="Line_18_f" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_f"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_41">
        <svg class="Line_18_ga" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ga"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_42">
        <svg class="Line_18_gb" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_gb"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_43">
        <svg class="Line_18_gc" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_gc"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_44">
        <svg class="Line_18_gd" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_gd"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_45">
        <svg class="Line_18_ge" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ge"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_46">
        <svg class="Line_18_gf" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_gf"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_47">
        <svg class="Line_18_gg" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_gg"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_48">
        <svg class="Line_18_gh" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_gh"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_49">
        <svg class="Line_18_gj" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_gj"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_50">
        <svg class="Line_18_gl" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_gl"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_51">
        <svg class="Line_18_gn" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_gn"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_52">
        <svg class="Line_18_gp" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_gp"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_53">
        <svg class="Line_18_gr" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_gr"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_54">
        <svg class="Line_18_gt" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_gt"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_55">
        <svg class="Line_18_gv" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_gv"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_56">
        <svg class="Line_18_gx" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_gx"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_57">
        <svg class="Line_18_gz" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_gz"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_58">
        <svg class="Line_18_g" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_g"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_59">
        <svg class="Line_18_ha" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ha"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_60">
        <svg class="Line_18_hb" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_hb"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_61">
        <svg class="Line_18_hc" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_hc"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_62">
        <svg class="Line_18_hd" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_hd"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_63">
        <svg class="Line_18_he" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_he"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_64">
        <svg class="Line_18_hf" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_hf"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_65">
        <svg class="Line_18_hg" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_hg"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_66">
        <svg class="Line_18_hh" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_hh"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_67">
        <svg class="Line_18_hj" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_hj"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_68">
        <svg class="Line_18_hl" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_hl"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_69">
        <svg class="Line_18_hn" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_hn"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_70">
        <svg class="Line_18_hp" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_hp"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_71">
        <svg class="Line_18_hr" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_hr"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_72">
        <svg class="Line_18_ht" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ht"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_73">
        <svg class="Line_18_hv" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_hv"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_74">
        <svg class="Line_18_hx" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_hx"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_75">
        <svg class="Line_18_hz" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_hz"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_76">
        <svg class="Line_18_h" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_h"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_77">
        <svg class="Line_18_ia" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ia"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_78">
        <svg class="Line_18_ib" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ib"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_79">
        <svg class="Line_18_ic" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ic"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_80">
        <svg class="Line_18_id" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_id"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_81">
        <svg class="Line_18_ie" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ie"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_82">
        <svg class="Line_18_if" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_if"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_83">
        <svg class="Line_18_ig" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ig"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_84">
        <svg class="Line_18_ih" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ih"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_85">
        <svg class="Line_18_ij" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ij"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_86">
        <svg class="Line_18_il" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_il"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_87">
        <svg class="Line_18_in" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_in"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_88">
        <svg class="Line_18_ip" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ip"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_89">
        <svg class="Line_18_ir" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ir"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_90">
        <svg class="Line_18_it" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_it"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_91">
        <svg class="Line_18_iv" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_iv"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_92">
        <svg class="Line_18_ix" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ix"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_93">
        <svg class="Line_18_iz" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_iz"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_94">
        <svg class="Line_18_i" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_i"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_95">
        <svg class="Line_18_ja" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ja"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_96">
        <svg class="Line_18_jb" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_jb"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_97">
        <svg class="Line_18_jc" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_jc"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_98">
        <svg class="Line_18_jd" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_jd"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_99">
        <svg class="Line_18_je" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_je"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_100">
        <svg class="Line_18_jf" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_jf"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_101">
        <svg class="Line_18_jg" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_jg"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_102">
        <svg class="Line_18_jh" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_jh"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_103">
        <svg class="Line_18_jj" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_jj"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_104">
        <svg class="Line_18_jl" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_jl"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_105">
        <svg class="Line_18_jn" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_jn"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_106">
        <svg class="Line_18_jp" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_jp"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_107">
        <svg class="Line_18_jr" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_jr"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_108">
        <svg class="Line_18_jt" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_jt"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_109">
        <svg class="Line_18_jv" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_jv"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_110">
        <svg class="Line_18_jx" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_jx"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_111">
        <svg class="Line_18_jz" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_jz"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_112">
        <svg class="Line_18_j" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_j"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_113">
        <svg class="Line_18_ka" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ka"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_114">
        <svg class="Line_18_kb" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_kb"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_115">
        <svg class="Line_18_kc" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_kc"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_116">
        <svg class="Line_18_kd" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_kd"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_117">
        <svg class="Line_18_ke" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ke"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_118">
        <svg class="Line_18_kf" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_kf"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_119">
        <svg class="Line_18_kg" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_kg"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_120">
        <svg class="Line_18_kh" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_kh"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_121">
        <svg class="Line_18_kj" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_kj"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_122">
        <svg class="Line_18_kl" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_kl"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_123">
        <svg class="Line_18_kn" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_kn"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_124">
        <svg class="Line_18_kp" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_kp"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_125">
        <svg class="Line_18_kr" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_kr"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_126">
        <svg class="Line_18_kt" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_kt"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_127">
        <svg class="Line_18_kv" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_kv"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_128">
        <svg class="Line_18_kx" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_kx"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_129">
        <svg class="Line_18_kz" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_kz"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_130">
        <svg class="Line_18_k" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_k"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_131">
        <svg class="Line_18_la" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_la"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_132">
        <svg class="Line_18_lb" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_lb"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_133">
        <svg class="Line_18_lc" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_lc"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_134">
        <svg class="Line_18_ld" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ld"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_135">
        <svg class="Line_18_le" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_le"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_136">
        <svg class="Line_18_lf" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_lf"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_137">
        <svg class="Line_18_lg" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_lg"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_138">
        <svg class="Line_18_lh" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_lh"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_139">
        <svg class="Line_18_lj" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_lj"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_140">
        <svg class="Line_18_ll" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ll"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_141">
        <svg class="Line_18_ln" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ln"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_142">
        <svg class="Line_18_lp" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_lp"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_143">
        <svg class="Line_18_lr" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_lr"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_144">
        <svg class="Line_18_lt" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_lt"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_145">
        <svg class="Line_18_lv" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_lv"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_146">
        <svg class="Line_18_lx" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_lx"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_147">
        <svg class="Line_18_lz" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_lz"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_148">
        <svg class="Line_18_l" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_l"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_149">
        <svg class="Line_18_ma" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ma"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_150">
        <svg class="Line_18_mb" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_mb"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_151">
        <svg class="Line_18_mc" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_mc"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_152">
        <svg class="Line_18_md" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_md"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_153">
        <svg class="Line_18_me" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_me"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_154">
        <svg class="Line_18_mf" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_mf"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_155">
        <svg class="Line_18_mg" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_mg"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_156">
        <svg class="Line_18_mh" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_mh"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_157">
        <svg class="Line_18_mj" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_mj"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_158">
        <svg class="Line_18_ml" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ml"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_159">
        <svg class="Line_18_mn" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_mn"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_160">
        <svg class="Line_18_mp" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_mp"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_161">
        <svg class="Line_18_mr" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_mr"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_162">
        <svg class="Line_18_mt" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_mt"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_163">
        <svg class="Line_18_mv" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_mv"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_164">
        <svg class="Line_18_mx" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_mx"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_165">
        <svg class="Line_18_mz" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_mz"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_166">
        <svg class="Line_18_m" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_m"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_167">
        <svg class="Line_18_na" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_na"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_168">
        <svg class="Line_18_nb" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_nb"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_169">
        <svg class="Line_18_nc" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_nc"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_170">
        <svg class="Line_18_nd" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_nd"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_171">
        <svg class="Line_18_ne" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ne"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_172">
        <svg class="Line_18_nf" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_nf"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_173">
        <svg class="Line_18_ng" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ng"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_174">
        <svg class="Line_18_nh" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_nh"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_175">
        <svg class="Line_18_nj" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_nj"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_176">
        <svg class="Line_18_nl" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_nl"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_177">
        <svg class="Line_18_nn" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_nn"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_178">
        <svg class="Line_18_np" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_np"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_179">
        <svg class="Line_18_nr" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_nr"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_180">
        <svg class="Line_18_nt" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_nt"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_181">
        <svg class="Line_18_nv" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_nv"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_182">
        <svg class="Line_18_nx" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_nx"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_183">
        <svg class="Line_18_nz" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_nz"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_184">
        <svg class="Line_18_n" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_n"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_185">
        <svg class="Line_18_oa" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_oa"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_186">
        <svg class="Line_18_ob" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ob"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_187">
        <svg class="Line_18_oc" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_oc"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_188">
        <svg class="Line_18_od" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_od"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_189">
        <svg class="Line_18_oe" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_oe"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_190">
        <svg class="Line_18_of" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_of"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_191">
        <svg class="Line_18_og" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_og"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_192">
        <svg class="Line_18_oh" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_oh"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_193">
        <svg class="Line_18_oj" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_oj"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_194">
        <svg class="Line_18_ol" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ol"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_195">
        <svg class="Line_18_on" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_on"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_196">
        <svg class="Line_18_op" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_op"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_197">
        <svg class="Line_18_or" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_or"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_198">
        <svg class="Line_18_ot" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ot"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_199">
        <svg class="Line_18_ov" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ov"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_200">
        <svg class="Line_18_ox" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ox"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_201">
        <svg class="Line_18_oz" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_oz"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_202">
        <svg class="Line_18_o" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_o"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_203">
        <svg class="Line_18_pa" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_pa"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_204">
        <svg class="Line_18_pb" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_pb"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_205">
        <svg class="Line_18_pc" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_pc"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_206">
        <svg class="Line_18_pd" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_pd"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_207">
        <svg class="Line_18_pe" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_pe"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_208">
        <svg class="Line_18_pf" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_pf"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_209">
        <svg class="Line_18_pg" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_pg"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_210">
        <svg class="Line_18_ph" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_ph"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_211">
        <svg class="Line_18_pj" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_pj"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_212">
        <svg class="Line_18_pl" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_pl"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_213">
        <svg class="Line_18_pn" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_pn"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_214">
        <svg class="Line_18_pp" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_pp"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_215">
        <svg class="Line_18_pr" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_pr"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_216">
        <svg class="Line_18_pt" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_pt"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
      <div id="Repeat_Grid_1_217">
        <svg class="Line_18_pv" viewBox="0 0 1 1">
          <path
            fill="transparent"
            stroke="rgba(0,0,0,1)"
            stroke-width="1px"
            stroke-linejoin="miter"
            stroke-linecap="round"
            stroke-miterlimit="4"
            shape-rendering="auto"
            id="Line_18_pv"
            d="M 0 0 L 1 0"
          ></path>
        </svg>
      </div>
    </div>
    <div id="Aldi">
      <!-- <span><?php echo $admin;?></span> -->
      {{ data.agen_general ? profileData.fullname : data.agen.fullname }}
    </div>
    <div id="ID50">
      <!-- <template v-if="data.weight && data.long && data.wide">
        {{
          parseInt(data.weight) >
          (parseInt(data.long) * parseInt(data.wide) * parseInt(data.height)) /
            5000
            ? data.weight
            : (parseInt(data.long) *
                parseInt(data.wide) *
                parseInt(data.height)) /
              5000
        }}
      </template>
      <template v-else>
        0
      </template> -->
      <span>{{ data.charge_weight ? data.charge_weight : 0 }}</span>
      <!-- <span><?php 
                if($berat>$total){
                    echo $berat;
                }
                else{
                    echo $total;
                }
                ?></span> -->
    </div>
    <svg class="Rectangle_23">
      <rect
        fill="rgba(255,255,255,1)"
        stroke="rgba(0,0,0,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Rectangle_23"
        rx="0"
        ry="0"
        x="0"
        y="0"
        width="21"
        height="11"
      ></rect>
      <!-- <?php 
            if($jenis_layanan=='Cosmetic')
            {
                echo'<text x="6" y="14" fill="black">*</text>';
            }
            ?> -->
      <template v-if="data.service_type == 'Cosmetic'">
        <text x="6" y="14" fill="black">*</text>
      </template>
    </svg>
    <div id="Cosmetic">
      <span>Cosmetic</span>
    </div>
    <img id="MENTAHAN_JASKIPINcdr" src="@/assets/logo-opsional2.png" />
    <svg class="Rectangle_24">
      <rect
        fill="rgba(255,255,255,1)"
        stroke="rgba(0,0,0,1)"
        stroke-width="1px"
        stroke-linejoin="miter"
        stroke-linecap="butt"
        stroke-miterlimit="4"
        shape-rendering="auto"
        id="Rectangle_24"
        rx="0"
        ry="0"
        x="0"
        y="0"
        width="665"
        height="450"
      ></rect>
    </svg>
    <img id="MENTAHAN_JASKIPINcdr_p" src="@/assets/logo-opsional2.png" />
    <!-- <svg class="Rectangle_25">
            <rect fill="rgba(0,0,0,1)" id="Rectangle_25" rx="0" ry="0" x="0" y="0" width="183" height="24">
            </rect>
        </svg> -->
    <div id="CONSIGNEE_____________________">
      <span>Consignee </span>
    </div>
    <div id="Name">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          style="fill:rgba(0, 0, 0, 1);transform:;-ms-filter:"
        >
          <path
            d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h1 1 14H20z"
          ></path>
        </svg>
      </span>
    </div>
    <div id="__Arif">
      <!-- <span>: </span><span style="font-style:normal;font-weight:normal;"><?php echo $nama_penerima;?></span> -->
      <span style="font-style:normal;font-weight:normal;">{{
        data.recipient_name
      }}</span>
    </div>
    <div id="Phone_Number">
      <span
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          style="fill:rgba(0, 0, 0, 1);transform:;-ms-filter:"
        >
          <path
            d="M20.487,17.14l-4.065-3.696c-0.399-0.363-1.015-0.344-1.391,0.043l-2.393,2.461c-0.576-0.11-1.734-0.471-2.926-1.66 c-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394c0.388-0.376,0.406-0.991,0.043-1.391L6.859,3.513 c-0.363-0.401-0.98-0.439-1.391-0.087l-2.17,1.861C3.125,5.461,3.022,5.691,3.008,5.936c-0.015,0.25-0.301,6.172,4.291,10.766 C11.305,20.707,16.323,21,17.705,21c0.202,0,0.326-0.006,0.359-0.008c0.245-0.014,0.475-0.117,0.648-0.291l1.86-2.171 C20.926,18.119,20.887,17.503,20.487,17.14z"
          ></path></svg
      ></span>
    </div>
    <div id="___886907011096">
      <!-- <span>: </span><span style="font-style:normal;font-weight:normal;"><?php echo $telp_penerima;?></span> -->
      <span style="font-style:normal;font-weight:normal;">{{
        data.recipient_phone
      }}</span>
    </div>
    <div id="ADDRESS_CONSIGNEE">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        style="fill:rgba(0, 0, 0, 1);transform:;-ms-filter:"
      >
        <path
          d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z"
        ></path>
      </svg>
    </div>
    <div id="BLOK_PERINDU_8__H__JL_PERSIARA">
      <!-- <span><?php echo wordwrap($alamat_penerima,45, "<br>", true );?></span> -->
      {{ data.recipient_address }}
    </div>
    <!-- <svg class="Rectangle_26">
            <rect fill="rgba(0,0,0,1)" id="Rectangle_26" rx="0" ry="0" x="0" y="0" width="183" height="24">
            </rect>
        </svg> -->
    <div id="SENDER________________________">
      <span>Shipper </span>
    </div>
    <div id="Name_qc">
      <span
        ><svg
          data-v-39406981=""
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          style="fill: rgb(0, 0, 0);"
        >
          <path
            data-v-39406981=""
            d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h1 1 14H20z"
          ></path></svg
      ></span>
    </div>
    <div id="__Adit_Nugraha">
      <!-- <span>: </span><span style="font-style:normal;font-weight:normal;"><?php echo $nama_pengirim;?></span> -->
      <span style="font-style:normal;font-weight:normal;">{{
        data.sender_name
      }}</span>
    </div>
    <div id="Phone_Number_qe">
      <span
        ><span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            style="fill: rgb(0, 0, 0);"
          >
            <path
              data-v-39406981=""
              d="M20.487,17.14l-4.065-3.696c-0.399-0.363-1.015-0.344-1.391,0.043l-2.393,2.461c-0.576-0.11-1.734-0.471-2.926-1.66 c-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394c0.388-0.376,0.406-0.991,0.043-1.391L6.859,3.513 c-0.363-0.401-0.98-0.439-1.391-0.087l-2.17,1.861C3.125,5.461,3.022,5.691,3.008,5.936c-0.015,0.25-0.301,6.172,4.291,10.766 C11.305,20.707,16.323,21,17.705,21c0.202,0,0.326-0.006,0.359-0.008c0.245-0.014,0.475-0.117,0.648-0.291l1.86-2.171 C20.926,18.119,20.887,17.503,20.487,17.14z"
            ></path></svg></span
      ></span>
    </div>
    <div id="__089772837265">
      <!-- <span>: </span><span style="font-style:normal;font-weight:normal;"><?php echo $telp_pengirim;?></span> -->
      <span style="font-style:normal;font-weight:normal;">{{
        data.sender_phone
      }}</span>
    </div>
    <div id="ADDRESS_RECEIPT">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        style="fill: rgb(0, 0, 0);"
      >
        <path
          data-v-39406981=""
          d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z"
        ></path>
      </svg>
    </div>
    <div id="Cirebon___West_Java">
      <!-- <span><?php echo wordwrap($alamat_pengirim,45, "<br>", true );?></span> -->
      <!-- {{ data.sender_address }} -->
      Indonesia
    </div>
    <div id="A">
      <span>
        {{ generateBarcode(data.shipment_number) }}
        <svg id="barcode"></svg>
        <!-- <div v-html="generateBarcode(data.shipment_number)"></div> -->
        <!-- <script>
            JsBarcode("#barcode", "<?=$id_order ?>");
            </script> -->
      </span>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { api_url } from "@/config/api";
import Printd from "printd";

export default {
  data() {
    return {
      /* Auth Token */
      headers: JSON.parse(window.localStorage.getItem("token-auth-jaskipin")),
      /* Data List */
      data: [],
      input_by: "",
      courierData: [],
      cssText: `svg#barcode {
                margin: 0px;
                width: 250px;
                margin-top: 0px;
            }
            #A {
                position: absolute;
                left: 230px;
                top: 1040px;
                overflow: visible;
                width: 50px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 73px;
                line-height: 74px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            .mediaViewInfo {
                --web-view-name: nota+label;
                --web-view-id: nota_label;
                --web-scale-on-resize: true;
                --web-enable-deep-linking: true;
            }
            :root {
                --web-view-ids: nota_label;
            }
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                border: none;
            }
            #nota_label {
                position: absolute;
                width: 923px;
                height: 1307px;
                background-color: rgba(255,255,255,1);
                overflow: hidden;
                --web-view-name: nota+label;
                --web-view-id: nota_label;
                --web-scale-on-resize: true;
                --web-enable-deep-linking: true;
            }
            .Rectangle_1 {
                position: absolute;
                overflow: visible;
                width: 869px;
                height: 138px;
                left: 19px;
                top: 200px;
            }
            #JASKIPIN_COURIER_EXPRESS {
                position: absolute;
                left: 122px;
                top: 71px;
                overflow: visible;
                width: 301px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial Rounded MT;
                font-style: normal;
                font-weight: bold;
                font-size: 21px;
                line-height: 22px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #www_Jaskipin_co_id {
                position: absolute;
                left: 122px;
                top: 95px;
                overflow: visible;
                width: 122px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial Rounded MT;
                font-style: normal;
                font-weight: bold;
                font-size: 13px;
                line-height: 14px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #JASKIPIN_COURIER_EXPRESS_Label {
                position: absolute;
                left: 122px;
                top: 768px;
                overflow: visible;
                width: 301px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial Rounded MT;
                font-style: normal;
                font-weight: bold;
                font-size: 17px;
                line-height: 18px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
                z-index: 9999;
            }
            #www_Jaskipin_co_id_label {
                position: absolute;
                left: 122px;
                top: 788px;
                overflow: visible;
                width: 122px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial Rounded MT;
                font-style: normal;
                font-weight: bold;
                font-size: 11px;
                line-height: 13px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
                z-index: 9999;
            }
            #AWB__No_______________________ {
                position: absolute;
                left: 19px;
                top: 142px;
                overflow: visible;
                width: 136px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: bold;
                font-size: 12px;
                line-height: 13px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #signature-name {
                position: absolute;
                left: 93px;
                top: 527px;
                overflow: visible;
                width: 54px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #Mitra_Expedisi_______________ {
                position: absolute;
                left: 19px;
                top: 159px;
                overflow: visible;
                width: 127px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: bold;
                font-size: 12px;
                line-height: 13px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            .Rectangle_2 {
                position: absolute;
                overflow: visible;
                width: 869px;
                height: 24px;
                left: 19px;
                top: 176px;
            }
            #Shipment_Number {
                position: absolute;
                left: 752px;
                top: 121px;
                overflow: visible;
                width: 136px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: bold;
                font-size: 16px;
                line-height: 17px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #JCRX0000000 {
                position: absolute;
                left: 714px;
                top: 136px;
                overflow: visible;
                width: 155px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: bold;
                font-size: 24px;
                line-height: 25px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            .Path_1 {
                overflow: visible;
                position: absolute;
                width: 1px;
                height: 137px;
                left: 129px;
                top: 200px;
                transform: matrix(1,0,0,1,0,0);
            }
            .Path_2 {
                overflow: visible;
                position: absolute;
                width: 1px;
                height: 137px;
                left: 390.581px;
                top: 200px;
                transform: matrix(1,0,0,1,0,0);
            }
            .Path_3 {
                overflow: visible;
                position: absolute;
                width: 1px;
                height: 137px;
                left: 476.052px;
                top: 200px;
                transform: matrix(1,0,0,1,0,0);
            }
            .Line_1 {
                overflow: visible;
                position: absolute;
                width: 1px;
                height: 21px;
                left: 44.5px;
                top: 177.198px;
                transform: matrix(1,0,0,1,0,0);
            }
            #ID1 {
                position: absolute;
                left: 28px;
                top: 182px;
                overflow: visible;
                width: 7px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: bold;
                font-size: 11px;
                line-height: 12px;
                color: rgba(255,255,255,1);
                letter-spacing: -0.15px;
            }
            .Line_2 {
                overflow: visible;
                position: absolute;
                width: 1px;
                height: 21px;
                left: 413.671px;
                top: 177.198px;
                transform: matrix(1,0,0,1,0,0);
            }
            #ID2 {
                position: absolute;
                left: 399px;
                top: 182px;
                overflow: visible;
                width: 7px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: bold;
                font-size: 11px;
                line-height: 12px;
                color: rgba(255,255,255,1);
                letter-spacing: -0.15px;
            }
            .Line_3 {
                overflow: visible;
                position: absolute;
                width: 1px;
                height: 21px;
                left: 390.044px;
                top: 177.198px;
                transform: matrix(1,0,0,1,0,0);
            }
            #From__Sender_ {
                position: absolute;
                left: 48px;
                top: 182px;
                overflow: visible;
                width: 71px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(255,255,255,1);
                letter-spacing: -0.15px;
            }
            #To__Receiver_ {
                position: absolute;
                left: 426px;
                top: 182px;
                overflow: visible;
                width: 64px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(255,255,255,1);
                letter-spacing: -0.15px;
            }
            #__31532637802 {
                position: absolute;
                left: 157px;
                top: 142px;
                overflow: visible;
                width: 80px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: bold;
                font-size: 12px;
                line-height: 13px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #__Aramex {
                position: absolute;
                left: 157px;
                top: 159px;
                overflow: visible;
                width: 51px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: bold;
                font-size: 12px;
                line-height: 13px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #Name_______________ {
                position: absolute;
                left: 23px;
                top: 205px;
                overflow: visible;
                width: 73px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #Company_______________ {
                position: absolute;
                left: 23px;
                top: 225px;
                overflow: visible;
                width: 90px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #Sender_Address_______________ {
                position: absolute;
                left: 23px;
                top: 242px;
                overflow: visible;
                width: 120px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #AIRA_B___MAMA_AZMI____________ {
                position: absolute;
                left: 132px;
                top: 205px;
                overflow: visible;
                width: 152px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: bold;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #Name________________ {
                position: absolute;
                left: 393px;
                top: 205px;
                overflow: visible;
                width: 73px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #SITI_HAJAR_OMAR {
                position: absolute;
                left: 481px;
                top: 205px;
                overflow: visible;
                width: 96px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: bold;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #Company________________ {
                position: absolute;
                left: 392px;
                top: 225px;
                overflow: visible;
                width: 90px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #Delivery_Address______________ {
                position: absolute;
                left: 392px;
                top: 242px;
                overflow: visible;
                width: 124px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #ID36__JALAN_LANAI_KIARA__KIARA {
                position: absolute;
                left: 479px;
                top: 243px;
                overflow: visible;
                width: 400px;
                /* white-space: nowrap; */
                line-height: 13px;
                margin-top: -1px;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
                word-wrap: break-word;
            }
            #Cirebon_West_Java_Indonesia {
                position: absolute;
                left: 132px;
                top: 242px;
                overflow: visible;
                width: 141px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #Phone_No_ {
                position: absolute;
                left: 23px;
                top: 322px;
                overflow: visible;
                width: 52px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #ID081222111346 {
                position: absolute;
                left: 132px;
                top: 322px;
                overflow: visible;
                width: 71px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            .Rectangle_10 {
                position: absolute;
                overflow: visible;
                width: 869px;
                height: 18px;
                left: 19px;
                top: 319px;
            }
            .Rectangle_11 {
                position: absolute;
                overflow: visible;
                width: 869px;
                height: 24px;
                left: 19px;
                top: 339px;
            }
            .Line_4 {
                overflow: visible;
                position: absolute;
                width: 1px;
                height: 21.17px;
                left: 44.5px;
                top: 340.5px;
                transform: matrix(1,0,0,1,0,0);
            }
            #ID3 {
                position: absolute;
                left: 28px;
                top: 345px;
                overflow: visible;
                width: 7px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: bold;
                font-size: 11px;
                line-height: 12px;
                color: rgba(255,255,255,1);
                letter-spacing: -0.15px;
            }
            .Line_5 {
                overflow: visible;
                position: absolute;
                width: 1px;
                height: 21.17px;
                left: 413.671px;
                top: 340.5px;
                transform: matrix(1,0,0,1,0,0);
            }
            #ID4 {
                position: absolute;
                left: 399px;
                top: 345px;
                overflow: visible;
                width: 7px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: bold;
                font-size: 11px;
                line-height: 12px;
                color: rgba(255,255,255,1);
                letter-spacing: -0.15px;
            }
            .Line_6 {
                overflow: visible;
                position: absolute;
                width: 1px;
                height: 21.17px;
                left: 390.044px;
                top: 340.5px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Service___Payment {
                position: absolute;
                left: 48px;
                top: 345px;
                overflow: visible;
                width: 92px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(255,255,255,1);
                letter-spacing: -0.15px;
            }
            #Weight__Volume_and_Drescriptio {
                position: absolute;
                left: 429px;
                top: 345px;
                overflow: visible;
                width: 156px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(255,255,255,1);
                letter-spacing: -0.15px;
            }
            #Phone_No__bn {
                position: absolute;
                left: 404px;
                top: 322px;
                overflow: visible;
                width: 52px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #_60123729577 {
                position: absolute;
                left: 479px;
                top: 322px;
                overflow: visible;
                width: 73px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            .Rectangle_12 {
                position: absolute;
                overflow: visible;
                width: 869px;
                height: 102px;
                left: 19px;
                top: 363px;
            }
            .Path_4 {
                overflow: visible;
                position: absolute;
                width: 1px;
                height: 102px;
                left: 390.581px;
                top: 363px;
                transform: matrix(1,0,0,1,0,0);
            }
            .Path_5 {
                overflow: visible;
                position: absolute;
                width: 1px;
                height: 102px;
                left: 486.161px;
                top: 363px;
                transform: matrix(1,0,0,1,0,0);
            }
            .Path_7 {
                overflow: visible;
                position: absolute;
                width: 1px;
                height: 102px;
                left: 584.963px;
                top: 363px;
                transform: matrix(1,0,0,1,0,0);
            }
            .Path_8 {
                overflow: visible;
                position: absolute;
                width: 1px;
                height: 102px;
                left: 685.913px;
                top: 363px;
                transform: matrix(1,0,0,1,0,0);
            }
            .Path_9 {
                overflow: visible;
                position: absolute;
                width: 1px;
                height: 102px;
                left: 793.85px;
                top: 363px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Serevice {
                position: absolute;
                left: 23px;
                top: 364px;
                overflow: visible;
                width: 45px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: bold;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            .Rectangle_14 {
                position: absolute;
                overflow: visible;
                width: 21px;
                height: 11px;
                left: 22px;
                top: 382px;
            }
            .Rectangle_14_bx {
                position: absolute;
                overflow: visible;
                width: 21px;
                height: 11px;
                left: 22px;
                top: 399px;
            }
            .Rectangle_14_by {
                position: absolute;
                overflow: visible;
                width: 21px;
                height: 11px;
                left: 22px;
                top: 416px;
            }
            .Rectangle_14_bz {
                position: absolute;
                overflow: visible;
                width: 21px;
                height: 11px;
                left: 22px;
                top: 448px;
            }
            #Document {
                position: absolute;
                left: 45px;
                top: 382px;
                overflow: visible;
                width: 50px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #Garment {
                position: absolute;
                left: 45px;
                top: 398px;
                overflow: visible;
                width: 43px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #Herbal {
                position: absolute;
                left: 45px;
                top: 415px;
                overflow: visible;
                width: 33px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #Other_Service {
                position: absolute;
                left: 45px;
                top: 448px;
                overflow: visible;
                width: 66px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #Cash {
                position: absolute;
                left: 175px;
                top: 382px;
                overflow: visible;
                width: 26px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #Transfer {
                position: absolute;
                left: 175px;
                top: 398px;
                overflow: visible;
                width: 41px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #Payment {
                position: absolute;
                left: 136px;
                top: 364px;
                overflow: visible;
                width: 46px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: bold;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #No__Of_pieces_______________ {
                position: absolute;
                left: 411px;
                top: 370px;
                overflow: visible;
                width: 109px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #Weight____Kg________________ {
                position: absolute;
                left: 519px;
                top: 366px;
                overflow: visible;
                width: 70px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #___Dimension_L_x_W_x_H_Cm_____ {
                position: absolute;
                left: 601px;
                top: 366px;
                overflow: visible;
                width: 114px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #___Volumetric__Change_weight__ {
                position: absolute;
                left: 708px;
                top: 366px;
                overflow: visible;
                width: 116px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #___Charge_Price___________IDR_ {
                position: absolute;
                left: 807px;
                top: 366px;
                overflow: visible;
                width: 96px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #ID41 {
                position: absolute;
                left: 434px;
                top: 422px;
                overflow: visible;
                width: 13px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #ID12 {
                position: absolute;
                left: 530px;
                top: 422px;
                overflow: visible;
                width: 13px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #ID20 {
                position: absolute;
                left: 631px;
                top: 422px;
                overflow: visible;
                width: 13px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #Rp {
                position: absolute;
                left: 798px;
                top: 421px;
                overflow: visible;
                width: 15px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #ID30 {
                position: absolute;
                left: 835px;
                top: 421px;
                overflow: visible;
                width: 13px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            .Rectangle_16 {
                position: absolute;
                overflow: visible;
                width: 869px;
                height: 24px;
                left: 19px;
                top: 465px;
            }
            .Line_7 {
                overflow: visible;
                position: absolute;
                width: 1px;
                height: 22px;
                left: 44.5px;
                top: 465.968px;
                transform: matrix(1,0,0,1,0,0);
            }
            #ID5 {
                position: absolute;
                left: 28px;
                top: 470px;
                overflow: visible;
                width: 7px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: bold;
                font-size: 11px;
                line-height: 12px;
                color: rgba(255,255,255,1);
                letter-spacing: -0.15px;
            }
            .Line_8 {
                overflow: visible;
                position: absolute;
                width: 1px;
                height: 23px;
                left: 413.671px;
                top: 465.5px;
                transform: matrix(1,0,0,1,0,0);
            }
            #ID7 {
                position: absolute;
                left: 399px;
                top: 470px;
                overflow: visible;
                width: 7px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: bold;
                font-size: 11px;
                line-height: 12px;
                color: rgba(255,255,255,1);
                letter-spacing: -0.15px;
            }
            .Line_9 {
                overflow: visible;
                position: absolute;
                width: 1px;
                height: 22px;
                left: 390.044px;
                top: 465.968px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Received_By_Courier {
                position: absolute;
                left: 48px;
                top: 470px;
                overflow: visible;
                width: 99px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(255,255,255,1);
                letter-spacing: -0.15px;
            }
            #Description_of_Contents {
                position: absolute;
                left: 427px;
                top: 470px;
                overflow: visible;
                width: 112px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(255,255,255,1);
                letter-spacing: -0.15px;
            }
            .Rectangle_17 {
                position: absolute;
                overflow: visible;
                width: 869px;
                height: 73px;
                left: 19px;
                top: 488px;
            }
            .Path_10 {
                overflow: visible;
                position: absolute;
                width: 1px;
                height: 72px;
                left: 685.913px;
                top: 488.946px;
                transform: matrix(1,0,0,1,0,0);
            }
            .Path_11 {
                overflow: visible;
                position: absolute;
                width: 1px;
                height: 72px;
                left: 390.581px;
                top: 488.946px;
                transform: matrix(1,0,0,1,0,0);
            }
            .Path_12 {
                overflow: visible;
                position: absolute;
                width: 1px;
                height: 72px;
                left: 90px;
                top: 488.946px;
                transform: matrix(1,0,0,1,0,0);
            }
            .Path_13 {
                overflow: visible;
                position: absolute;
                width: 1px;
                height: 72px;
                left: 237.009px;
                top: 488.946px;
                transform: matrix(1,0,0,1,0,0);
            }
            .Line_10 {
                overflow: visible;
                position: absolute;
                width: 868.85px;
                height: 1px;
                left: 19.5px;
                top: 241.367px;
                transform: matrix(1,0,0,1,0,0);
            }
            .Line_11 {
                overflow: visible;
                position: absolute;
                width: 868.85px;
                height: 1px;
                left: 19px;
                top: 221.627px;
                transform: matrix(1,0,0,1,0,0);
            }
            .Line_12 {
                overflow: visible;
                position: absolute;
                width: 496.85px;
                height: 1px;
                left: 390.5px;
                top: 392.802px;
                transform: matrix(1,0,0,1,0,0);
            }
            .Line_13 {
                overflow: visible;
                position: absolute;
                width: 217px;
                height: 1px;
                left: 19.5px;
                top: 522.446px;
                transform: matrix(1,0,0,1,0,0);
            }
            .Line_14 {
                overflow: visible;
                position: absolute;
                width: 371.5px;
                height: 1px;
                left: 19px;
                top: 505.446px;
                transform: matrix(1,0,0,1,0,0);
            }
            .Path_14 {
                overflow: visible;
                position: absolute;
                width: 1px;
                height: 16.5px;
                left: 281.41px;
                top: 488.946px;
                transform: matrix(1,0,0,1,0,0);
            }
            .Line_15 {
                overflow: visible;
                position: absolute;
                width: 1px;
                height: 22px;
                left: 260.098px;
                top: 465.968px;
                transform: matrix(1,0,0,1,0,0);
            }
            #ID6 {
                position: absolute;
                left: 246px;
                top: 470px;
                overflow: visible;
                width: 7px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: bold;
                font-size: 11px;
                line-height: 12px;
                color: rgba(255,255,255,1);
                letter-spacing: -0.15px;
            }
            .Line_16 {
                overflow: visible;
                position: absolute;
                width: 1px;
                height: 22px;
                left: 236.472px;
                top: 465.968px;
                transform: matrix(1,0,0,1,0,0);
            }
            .Line_17 {
                overflow: visible;
                position: absolute;
                width: 1px;
                height: 22px;
                left: 686.45px;
                top: 465.968px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Name________________c {
                position: absolute;
                left: 23px;
                top: 491px;
                overflow: visible;
                width: 73px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #Date {
                position: absolute;
                left: 23px;
                top: 507px;
                overflow: visible;
                width: 24px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #Signature {
                position: absolute;
                left: 23px;
                top: 524px;
                overflow: visible;
                width: 47px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #ID20_11_2019 {
                position: absolute;
                left: 93px;
                top: 507px;
                overflow: visible;
                width: 54px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #Name________________da {
                position: absolute;
                left: 247px;
                top: 491px;
                overflow: visible;
                width: 73px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #AIRA_B___MAMA_AZMI_____________c {
                position: absolute;
                left: 284px;
                top: 491px;
                overflow: visible;
                width: 147px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #ID1_da {
                position: absolute;
                left: 401px;
                top: 491px;
                overflow: visible;
                width: 7px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #ID6_db {
                position: absolute;
                left: 401px;
                top: 507px;
                overflow: visible;
                width: 7px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #US_ {
                position: absolute;
                left: 692px;
                top: 491px;
                overflow: visible;
                width: 22px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #US__dd {
                position: absolute;
                left: 692px;
                top: 509px;
                overflow: visible;
                width: 22px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #US__de {
                position: absolute;
                left: 692px;
                top: 527px;
                overflow: visible;
                width: 22px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #US__df {
                position: absolute;
                left: 692px;
                top: 545px;
                overflow: visible;
                width: 22px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #_ {
                position: absolute;
                left: 840px;
                top: 491px;
                overflow: visible;
                width: 5px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #__dh {
                position: absolute;
                left: 877px;
                top: 509px;
                overflow: visible;
                width: 5px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #__di {
                position: absolute;
                left: 877px;
                top: 527px;
                overflow: visible;
                width: 5px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #__dj {
                position: absolute;
                left: 877px;
                top: 545px;
                overflow: visible;
                width: 5px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #Signature__Sender_ {
                position: absolute;
                left: 266px;
                top: 470px;
                overflow: visible;
                width: 91px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(255,255,255,1);
                letter-spacing: -0.15px;
            }
            #Customs_Value {
                position: absolute;
                left: 765px;
                top: 471px;
                overflow: visible;
                width: 66px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 10px;
                line-height: 11px;
                color: rgba(255,255,255,1);
                letter-spacing: -0.15px;
            }
            #Credit {
                position: absolute;
                left: 175px;
                top: 415px;
                overflow: visible;
                width: 30px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            .Rectangle_18 {
                position: absolute;
                overflow: visible;
                width: 21px;
                height: 11px;
                left: 150px;
                top: 382px;
            }
            .Rectangle_19 {
                position: absolute;
                overflow: visible;
                width: 21px;
                height: 11px;
                left: 150px;
                top: 399px;
            }
            .Rectangle_20 {
                position: absolute;
                overflow: visible;
                width: 21px;
                height: 11px;
                left: 150px;
                top: 416px;
            }
            #exluding_insurance_and_import_ {
                position: absolute;
                left: 27px;
                top: 690px;
                overflow: visible;
                width: 348px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: bold;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #Repeat_Grid_1 {
                position: absolute;
                width: 869px;
                height: 2px;
                left: 19px;
                top: 715px;
                overflow: hidden;
            }
            #Repeat_Grid_1_0 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 0.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18 {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_1 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 4.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_dv {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_2 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 8.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_dx {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_3 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 12.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_dz {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_4 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 16.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_d {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_5 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 20.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ea {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_6 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 24.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_eb {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_7 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 28.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ec {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_8 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 32.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ed {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_9 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 36.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ee {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_10 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 40.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ef {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_11 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 44.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_eg {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_12 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 48.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_eh {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_13 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 52.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ej {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_14 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 56.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_el {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_15 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 60.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_en {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_16 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 64.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ep {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_17 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 68.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_er {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_18 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 72.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_et {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_19 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 76.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ev {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_20 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 80.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ex {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_21 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 84.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ez {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_22 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 88.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_e {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_23 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 92.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_fa {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_24 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 96.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_fb {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_25 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 100.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_fc {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_26 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 104.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_fd {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_27 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 108.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_fe {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_28 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 112.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ff {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_29 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 116.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_fg {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_30 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 120.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_fh {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_31 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 124.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_fj {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_32 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 128.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_fl {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_33 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 132.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_fn {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_34 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 136.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_fp {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_35 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 140.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_fr {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_36 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 144.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ft {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_37 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 148.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_fv {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_38 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 152.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_fx {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_39 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 156.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_fz {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_40 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 160.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_f {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_41 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 164.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ga {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_42 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 168.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_gb {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_43 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 172.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_gc {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_44 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 176.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_gd {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_45 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 180.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ge {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_46 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 184.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_gf {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_47 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 188.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_gg {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_48 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 192.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_gh {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_49 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 196.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_gj {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_50 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 200.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_gl {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_51 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 204.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_gn {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_52 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 208.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_gp {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_53 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 212.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_gr {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_54 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 216.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_gt {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_55 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 220.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_gv {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_56 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 224.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_gx {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_57 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 228.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_gz {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_58 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 232.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_g {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_59 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 236.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ha {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_60 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 240.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_hb {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_61 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 244.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_hc {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_62 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 248.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_hd {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_63 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 252.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_he {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_64 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 256.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_hf {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_65 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 260.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_hg {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_66 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 264.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_hh {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_67 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 268.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_hj {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_68 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 272.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_hl {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_69 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 276.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_hn {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_70 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 280.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_hp {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_71 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 284.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_hr {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_72 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 288.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ht {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_73 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 292.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_hv {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_74 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 296.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_hx {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_75 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 300.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_hz {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_76 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 304.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_h {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_77 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 308.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ia {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_78 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 312.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ib {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_79 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 316.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ic {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_80 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 320.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_id {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_81 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 324.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ie {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_82 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 328.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_if {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_83 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 332.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ig {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_84 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 336.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ih {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_85 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 340.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ij {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_86 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 344.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_il {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_87 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 348.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_in {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_88 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 352.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ip {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_89 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 356.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ir {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_90 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 360.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_it {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_91 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 364.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_iv {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_92 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 368.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ix {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_93 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 372.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_iz {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_94 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 376.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_i {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_95 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 380.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ja {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_96 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 384.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_jb {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_97 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 388.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_jc {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_98 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 392.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_jd {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_99 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 396.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_je {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_100 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 400.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_jf {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_101 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 404.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_jg {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_102 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 408.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_jh {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_103 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 412.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_jj {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_104 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 416.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_jl {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_105 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 420.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_jn {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_106 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 424.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_jp {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_107 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 428.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_jr {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_108 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 432.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_jt {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_109 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 436.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_jv {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_110 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 440.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_jx {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_111 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 444.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_jz {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_112 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 448.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_j {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_113 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 452.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ka {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_114 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 456.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_kb {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_115 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 460.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_kc {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_116 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 464.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_kd {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_117 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 468.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ke {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_118 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 472.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_kf {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_119 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 476.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_kg {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_120 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 480.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_kh {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_121 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 484.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_kj {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_122 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 488.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_kl {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_123 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 492.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_kn {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_124 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 496.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_kp {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_125 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 500.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_kr {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_126 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 504.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_kt {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_127 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 508.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_kv {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_128 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 512.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_kx {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_129 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 516.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_kz {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_130 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 520.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_k {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_131 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 524.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_la {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_132 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 528.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_lb {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_133 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 532.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_lc {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_134 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 536.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ld {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_135 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 540.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_le {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_136 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 544.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_lf {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_137 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 548.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_lg {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_138 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 552.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_lh {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_139 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 556.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_lj {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_140 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 560.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ll {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_141 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 564.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ln {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_142 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 568.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_lp {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_143 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 572.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_lr {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_144 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 576.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_lt {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_145 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 580.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_lv {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_146 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 584.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_lx {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_147 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 588.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_lz {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_148 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 592.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_l {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_149 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 596.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ma {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_150 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 600.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_mb {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_151 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 604.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_mc {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_152 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 608.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_md {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_153 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 612.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_me {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_154 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 616.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_mf {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_155 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 620.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_mg {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_156 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 624.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_mh {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_157 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 628.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_mj {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_158 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 632.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ml {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_159 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 636.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_mn {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_160 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 640.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_mp {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_161 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 644.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_mr {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_162 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 648.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_mt {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_163 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 652.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_mv {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_164 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 656.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_mx {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_165 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 660.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_mz {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_166 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 664.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_m {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_167 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 668.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_na {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_168 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 672.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_nb {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_169 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 676.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_nc {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_170 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 680.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_nd {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_171 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 684.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ne {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_172 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 688.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_nf {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_173 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 692.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ng {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_174 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 696.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_nh {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_175 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 700.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_nj {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_176 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 704.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_nl {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_177 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 708.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_nn {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_178 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 712.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_np {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_179 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 716.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_nr {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_180 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 720.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_nt {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_181 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 724.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_nv {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_182 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 728.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_nx {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_183 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 732.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_nz {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_184 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 736.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_n {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_185 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 740.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_oa {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_186 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 744.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ob {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_187 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 748.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_oc {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_188 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 752.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_od {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_189 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 756.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_oe {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_190 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 760.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_of {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_191 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 764.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_og {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_192 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 768.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_oh {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_193 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 772.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_oj {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_194 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 776.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ol {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_195 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 780.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_on {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_196 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 784.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_op {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_197 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 788.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_or {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_198 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 792.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ot {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_199 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 796.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ov {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_200 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 800.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ox {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_201 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 804.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_oz {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_202 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 808.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_o {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_203 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 812.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_pa {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_204 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 816.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_pb {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_205 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 820.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_pc {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_206 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 824.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_pd {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_207 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 828.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_pe {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_208 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 832.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_pf {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_209 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 836.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_pg {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_210 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 840.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_ph {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_211 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 844.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_pj {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_212 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 848.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_pl {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_213 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 852.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_pn {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_214 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 856.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_pp {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_215 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 860.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_pr {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_216 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 864.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_pt {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Repeat_Grid_1_217 {
                position: absolute;
                width: 1px;
                height: 1px;
                left: 868.5px;
                top: 0.5px;
                overflow: visible;
            }
            .Line_18_pv {
                overflow: visible;
                position: absolute;
                width: 2px;
                height: 1px;
                left: 0px;
                top: 0px;
                transform: matrix(1,0,0,1,0,0);
            }
            #Aldi {
                position: absolute;
                left: 93px;
                top: 492px;
                overflow: visible;
                width: 19px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #ID50 {
                position: absolute;
                left: 734px;
                top: 422px;
                overflow: visible;
                width: 13px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            .Rectangle_23 {
                position: absolute;
                overflow: visible;
                width: 21px;
                height: 11px;
                left: 22px;
                top: 432px;
            }
            #Cosmetic {
                position: absolute;
                left: 45px;
                top: 432px;
                overflow: visible;
                width: 46px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 11px;
                line-height: 12px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #MENTAHAN_JASKIPINcdr {
                position: absolute;
                width: 71px;
                height: auto;
                left: 28px;
                top: 55px;
                overflow: visible;
            }
            .Rectangle_24 {
                position: absolute;
                overflow: visible;
                width: 665px;
                height: 560px;
                left: 19px;
                top: 735px;
                border-radius: 10px;
            }
            #MENTAHAN_JASKIPINcdr_p {
                position: absolute;
                width: 71px;
                height: auto;
                left: 32px;
                top: 748px;
                overflow: visible;
            }
            .Rectangle_25 {
                position: absolute;
                overflow: visible;
                width: 183px;
                height: 24px;
                left: 32px;
                top: 729px;
            }
            #CONSIGNEE_____________________ {
                position: absolute;
                left: 32px;
                top: 848px;
                overflow: visible;
                width: 209px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                line-height: 17px;
                letter-spacing: -0.15px;
            }
            #Name {
                position: absolute;
                left: 32px;
                top: 878px;
                overflow: visible;
                width: 53px;
                white-space: nowrap;
                text-align: left;
                font-family: Times New Roman;
                font-style: normal;
                font-weight: bold;
                font-size: 21px;
                line-height: 22px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #__Arif {
                position: absolute;
                left: 52px;
                top: 875px;
                overflow: visible;
                width: 49px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: bold;
                font-size: 14px;
                line-height: 22px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #Phone_Number {
                position: absolute;
                left: 32px;
                top: 902px;
                overflow: visible;
                width: 133px;
                white-space: nowrap;
                text-align: left;
                font-family: Times New Roman;
                font-style: normal;
                font-weight: bold;
                font-size: 21px;
                line-height: 22px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #___886907011096 {
                position: absolute;
                left: 52px;
                top: 899px;
                overflow: visible;
                width: 146px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: bold;
                font-size: 14px;
                line-height: 22px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #BLOK_PERINDU_8__H__JL_PERSIARA {
                position: absolute;
                left: 52px;
                top: 926px;
                overflow: visible;
                width: 170px;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 19px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
                word-wrap: break-word;
            }
            .Rectangle_26 {
                position: absolute;
                overflow: visible;
                width: 183px;
                height: 24px;
                left: 32px;
                top: 982px;
            }
            #SENDER________________________ {
                position: absolute;
                left: 350px;
                top: 848px;
                overflow: visible;
                width: 180px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: 600;
                font-size: 16px;
                line-height: 17px;
                letter-spacing: -0.15px;
            }
            #Name_qc {
                position: absolute;
                left: 350px;
                top: 878px;
                overflow: visible;
                width: 53px;
                white-space: nowrap;
                text-align: left;
                font-family: Times New Roman;
                font-style: normal;
                font-weight: bold;
                font-size: 21px;
                line-height: 22px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #__Adit_Nugraha {
                position: absolute;
                left: 370px;
                top: 875px;
                overflow: visible;
                width: 124px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: bold;
                font-size: 14px;
                line-height: 22px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #Phone_Number_qe {
                position: absolute;
                left: 350px;
                top: 902px;
                overflow: visible;
                width: 133px;
                white-space: nowrap;
                text-align: left;
                font-family: Times New Roman;
                font-style: normal;
                font-weight: bold;
                font-size: 21px;
                line-height: 22px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #__089772837265 {
                position: absolute;
                left: 370px;
                top: 899px;
                overflow: visible;
                width: 135px;
                white-space: nowrap;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: bold;
                font-size: 14px;
                line-height: 22px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #Cirebon___West_Java {
                position: absolute;
                left: 370px;
                top: 925px;
                overflow: visible;
                width: 166px;
                white-space: normal;
                text-align: left;
                font-family: Arial;
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 18px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #ADDRESS_CONSIGNEE {
                position: absolute;
                left: 32px;
                top: 927px;
                overflow: visible;
                width: 53px;
                white-space: nowrap;
                text-align: left;
                font-family: Times New Roman;
                font-style: normal;
                font-weight: bold;
                font-size: 21px;
                line-height: 22px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }
            #ADDRESS_RECEIPT {
                position: absolute;
                left: 350px;
                top: 927px;
                overflow: visible;
                width: 53px;
                white-space: nowrap;
                text-align: left;
                font-family: Times New Roman;
                font-style: normal;
                font-weight: bold;
                font-size: 21px;
                line-height: 22px;
                color: rgba(0,0,0,1);
                letter-spacing: -0.15px;
            }`,
    };
  },
  computed: {
    profileData() {
      let profile = JSON.parse(
        window.localStorage.getItem("data-profile-jaskipin")
      );
      if (profile) {
        return profile;
      } else {
        return null;
      }
    },
    totalBerat() {
      const sum = this.data.detail_volume?.reduce((a, { berat }) => {
        return a + berat;
      }, 0);
      return sum;
    },
    totalKoli() {
      return this.data.detail_volume?.reduce((a, { koli }) => {
        return a + koli;
      }, 0);
    },
  },
  created() {
    this.getDetailOrder();

    /* Config Print */
    this.d = new Printd();
    const { contentWindow } = this.d.getIFrame();
    contentWindow.addEventListener("beforeprint", () =>
      console.log("before print event!")
    );
    contentWindow.addEventListener("afterprint", () =>
      console.log("after print event!")
    );
  },
  methods: {
    async getDetailOrder() {
      try {
        const response = await axios.get(
          `${api_url}/api/v1/transaction/international-order/admin/get/${this.$route.params.id}`,
          { headers: this.headers }
        );
        console.log(response);

        /* Set Data Selected */
        this.data = response.data.data[0];
        this.getInputBy(this.data.input_by);
        this.getListCourier();

        /* Print Page */
        setTimeout(
          function() {
            this.printPage();
          }.bind(this),
          2000
        );
      } catch (error) {
        console.log(error);
      }
    },
    async getInputBy(id) {
      try {
        const response = await axios.get(
          `${api_url}/api/v1/users/user/get/${id}`,
          { headers: this.headers }
        );
        console.log(response);
        /* Set Data Selected */
        this.input_by = response.data.data[0];
      } catch (error) {
        console.log(error);
      }
    },
    async getListCourier() {
      let query_params = {
        pagination: false,
      };

      try {
        const response = await axios.get(
          `${api_url}/api/v1/shipping-rates/courier/admin`,
          { params: query_params, headers: this.headers }
        );
        console.log(response);
        response.data.map((item) => {
          if (item.courier_type == "International") {
            if (item.courier_name === this.data.courier) {
              this.courierData = item;
            }
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
    generateBarcode(value) {
      let JsBarcode = require("jsbarcode");
      window.setTimeout(function() {
        JsBarcode("#barcode", value);
      }, 0);
    },
    formatDate(value) {
      let options = { year: "numeric", month: "long", day: "numeric" };
      let date = new Date(value).toLocaleString("en-EN", options);
      return date;
    },
    formatPrice(number) {
      var rupiah = "";
      var angkarev = number
        .toString()
        .split("")
        .reverse()
        .join("");
      for (var i = 0; i < angkarev.length; i++)
        if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + ".";
      return rupiah
        .split("", rupiah.length - 1)
        .reverse()
        .join("");
    },
    async printPage() {
      await this.d.print(this.$el, [this.cssText]);
    },
  },
};
</script>

<style scoped>
svg#barcode {
  margin: 0px;
  width: 250px;
  margin-top: 0px;
}
#A {
  position: absolute;
  left: 230px;
  top: 1040px;
  overflow: visible;
  width: 50px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 73px;
  line-height: 74px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
.mediaViewInfo {
  --web-view-name: nota + label;
  --web-view-id: nota_label;
  --web-scale-on-resize: true;
  --web-enable-deep-linking: true;
}
:root {
  --web-view-ids: nota_label;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: none;
}
#nota_label {
  position: absolute;
  width: 923px;
  height: 1307px;
  background-color: rgba(255, 255, 255, 1);
  overflow: hidden;
  --web-view-name: nota + label;
  --web-view-id: nota_label;
  --web-scale-on-resize: true;
  --web-enable-deep-linking: true;
}
.Rectangle_1 {
  position: absolute;
  overflow: visible;
  width: 869px;
  height: 138px;
  left: 19px;
  top: 200px;
}
#JASKIPIN_COURIER_EXPRESS {
  position: absolute;
  left: 122px;
  top: 71px;
  overflow: visible;
  width: 301px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial Rounded MT;
  font-style: normal;
  font-weight: bold;
  font-size: 21px;
  line-height: 22px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#www_Jaskipin_co_id {
  position: absolute;
  left: 122px;
  top: 95px;
  overflow: visible;
  width: 122px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial Rounded MT;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 14px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#JASKIPIN_COURIER_EXPRESS_Label {
  position: absolute;
  left: 122px;
  top: 768px;
  overflow: visible;
  width: 301px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial Rounded MT;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 18px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
  z-index: 9999;
}
#www_Jaskipin_co_id_label {
  position: absolute;
  left: 122px;
  top: 788px;
  overflow: visible;
  width: 122px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial Rounded MT;
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 13px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
  z-index: 9999;
}
#AWB__No_______________________ {
  position: absolute;
  left: 19px;
  top: 142px;
  overflow: visible;
  width: 136px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 13px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#signature-name {
  position: absolute;
  left: 93px;
  top: 527px;
  overflow: visible;
  width: 54px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#Mitra_Expedisi_______________ {
  position: absolute;
  left: 19px;
  top: 159px;
  overflow: visible;
  width: 127px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 13px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
.Rectangle_2 {
  position: absolute;
  overflow: visible;
  width: 869px;
  height: 24px;
  left: 19px;
  top: 176px;
}
#Shipment_Number {
  position: absolute;
  left: 752px;
  top: 121px;
  overflow: visible;
  width: 136px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 17px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#JCRX0000000 {
  position: absolute;
  left: 714px;
  top: 136px;
  overflow: visible;
  width: 155px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 25px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
.Path_1 {
  overflow: visible;
  position: absolute;
  width: 1px;
  height: 137px;
  left: 129px;
  top: 200px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.Path_2 {
  overflow: visible;
  position: absolute;
  width: 1px;
  height: 137px;
  left: 390.581px;
  top: 200px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.Path_3 {
  overflow: visible;
  position: absolute;
  width: 1px;
  height: 137px;
  left: 476.052px;
  top: 200px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.Line_1 {
  overflow: visible;
  position: absolute;
  width: 1px;
  height: 21px;
  left: 44.5px;
  top: 177.198px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#ID1 {
  position: absolute;
  left: 28px;
  top: 182px;
  overflow: visible;
  width: 7px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 12px;
  color: rgba(255, 255, 255, 1);
  letter-spacing: -0.15px;
}
.Line_2 {
  overflow: visible;
  position: absolute;
  width: 1px;
  height: 21px;
  left: 413.671px;
  top: 177.198px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#ID2 {
  position: absolute;
  left: 399px;
  top: 182px;
  overflow: visible;
  width: 7px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 12px;
  color: rgba(255, 255, 255, 1);
  letter-spacing: -0.15px;
}
.Line_3 {
  overflow: visible;
  position: absolute;
  width: 1px;
  height: 21px;
  left: 390.044px;
  top: 177.198px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#From__Sender_ {
  position: absolute;
  left: 48px;
  top: 182px;
  overflow: visible;
  width: 71px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(255, 255, 255, 1);
  letter-spacing: -0.15px;
}
#To__Receiver_ {
  position: absolute;
  left: 426px;
  top: 182px;
  overflow: visible;
  width: 64px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(255, 255, 255, 1);
  letter-spacing: -0.15px;
}
#__31532637802 {
  position: absolute;
  left: 157px;
  top: 142px;
  overflow: visible;
  width: 80px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 13px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#__Aramex {
  position: absolute;
  left: 157px;
  top: 159px;
  overflow: visible;
  width: 51px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 13px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#Name_______________ {
  position: absolute;
  left: 23px;
  top: 205px;
  overflow: visible;
  width: 73px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#Company_______________ {
  position: absolute;
  left: 23px;
  top: 225px;
  overflow: visible;
  width: 90px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#Sender_Address_______________ {
  position: absolute;
  left: 23px;
  top: 242px;
  overflow: visible;
  width: 120px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#AIRA_B___MAMA_AZMI____________ {
  position: absolute;
  left: 132px;
  top: 205px;
  overflow: visible;
  width: 152px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#Name________________ {
  position: absolute;
  left: 393px;
  top: 205px;
  overflow: visible;
  width: 73px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#SITI_HAJAR_OMAR {
  position: absolute;
  left: 481px;
  top: 205px;
  overflow: visible;
  width: 96px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#Company________________ {
  position: absolute;
  left: 392px;
  top: 225px;
  overflow: visible;
  width: 90px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#Delivery_Address______________ {
  position: absolute;
  left: 392px;
  top: 242px;
  overflow: visible;
  width: 124px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#ID36__JALAN_LANAI_KIARA__KIARA {
  position: absolute;
  left: 479px;
  top: 243px;
  overflow: visible;
  width: 400px;
  /* white-space: nowrap; */
  line-height: 13px;
  margin-top: -1px;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
  word-wrap: break-word;
}
#Cirebon_West_Java_Indonesia {
  position: absolute;
  left: 132px;
  top: 242px;
  overflow: visible;
  width: 141px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#Phone_No_ {
  position: absolute;
  left: 23px;
  top: 322px;
  overflow: visible;
  width: 52px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#ID081222111346 {
  position: absolute;
  left: 132px;
  top: 322px;
  overflow: visible;
  width: 71px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
.Rectangle_10 {
  position: absolute;
  overflow: visible;
  width: 869px;
  height: 18px;
  left: 19px;
  top: 319px;
}
.Rectangle_11 {
  position: absolute;
  overflow: visible;
  width: 869px;
  height: 24px;
  left: 19px;
  top: 339px;
}
.Line_4 {
  overflow: visible;
  position: absolute;
  width: 1px;
  height: 21.17px;
  left: 44.5px;
  top: 340.5px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#ID3 {
  position: absolute;
  left: 28px;
  top: 345px;
  overflow: visible;
  width: 7px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 12px;
  color: rgba(255, 255, 255, 1);
  letter-spacing: -0.15px;
}
.Line_5 {
  overflow: visible;
  position: absolute;
  width: 1px;
  height: 21.17px;
  left: 413.671px;
  top: 340.5px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#ID4 {
  position: absolute;
  left: 399px;
  top: 345px;
  overflow: visible;
  width: 7px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 12px;
  color: rgba(255, 255, 255, 1);
  letter-spacing: -0.15px;
}
.Line_6 {
  overflow: visible;
  position: absolute;
  width: 1px;
  height: 21.17px;
  left: 390.044px;
  top: 340.5px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Service___Payment {
  position: absolute;
  left: 48px;
  top: 345px;
  overflow: visible;
  width: 92px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(255, 255, 255, 1);
  letter-spacing: -0.15px;
}
#Weight__Volume_and_Drescriptio {
  position: absolute;
  left: 429px;
  top: 345px;
  overflow: visible;
  width: 156px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(255, 255, 255, 1);
  letter-spacing: -0.15px;
}
#Phone_No__bn {
  position: absolute;
  left: 404px;
  top: 322px;
  overflow: visible;
  width: 52px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#_60123729577 {
  position: absolute;
  left: 479px;
  top: 322px;
  overflow: visible;
  width: 73px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
.Rectangle_12 {
  position: absolute;
  overflow: visible;
  width: 869px;
  height: 102px;
  left: 19px;
  top: 363px;
}
.Path_4 {
  overflow: visible;
  position: absolute;
  width: 1px;
  height: 102px;
  left: 390.581px;
  top: 363px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.Path_5 {
  overflow: visible;
  position: absolute;
  width: 1px;
  height: 102px;
  left: 486.161px;
  top: 363px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.Path_7 {
  overflow: visible;
  position: absolute;
  width: 1px;
  height: 102px;
  left: 584.963px;
  top: 363px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.Path_8 {
  overflow: visible;
  position: absolute;
  width: 1px;
  height: 102px;
  left: 685.913px;
  top: 363px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.Path_9 {
  overflow: visible;
  position: absolute;
  width: 1px;
  height: 102px;
  left: 793.85px;
  top: 363px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Serevice {
  position: absolute;
  left: 23px;
  top: 364px;
  overflow: visible;
  width: 45px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
.Rectangle_14 {
  position: absolute;
  overflow: visible;
  width: 21px;
  height: 11px;
  left: 22px;
  top: 382px;
}
.Rectangle_14_bx {
  position: absolute;
  overflow: visible;
  width: 21px;
  height: 11px;
  left: 22px;
  top: 399px;
}
.Rectangle_14_by {
  position: absolute;
  overflow: visible;
  width: 21px;
  height: 11px;
  left: 22px;
  top: 416px;
}
.Rectangle_14_bz {
  position: absolute;
  overflow: visible;
  width: 21px;
  height: 11px;
  left: 22px;
  top: 448px;
}
#Document {
  position: absolute;
  left: 45px;
  top: 382px;
  overflow: visible;
  width: 50px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#Garment {
  position: absolute;
  left: 45px;
  top: 398px;
  overflow: visible;
  width: 43px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#Herbal {
  position: absolute;
  left: 45px;
  top: 415px;
  overflow: visible;
  width: 33px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#Other_Service {
  position: absolute;
  left: 45px;
  top: 448px;
  overflow: visible;
  width: 66px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#Cash {
  position: absolute;
  left: 175px;
  top: 382px;
  overflow: visible;
  width: 26px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#Transfer {
  position: absolute;
  left: 175px;
  top: 398px;
  overflow: visible;
  width: 41px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#Payment {
  position: absolute;
  left: 136px;
  top: 364px;
  overflow: visible;
  width: 46px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#No__Of_pieces_______________ {
  position: absolute;
  left: 411px;
  top: 370px;
  overflow: visible;
  width: 109px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#Weight____Kg________________ {
  position: absolute;
  left: 519px;
  top: 366px;
  overflow: visible;
  width: 70px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#___Dimension_L_x_W_x_H_Cm_____ {
  position: absolute;
  left: 601px;
  top: 366px;
  overflow: visible;
  width: 114px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#___Volumetric__Change_weight__ {
  position: absolute;
  left: 708px;
  top: 366px;
  overflow: visible;
  width: 116px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#___Charge_Price___________IDR_ {
  position: absolute;
  left: 807px;
  top: 366px;
  overflow: visible;
  width: 96px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#ID41 {
  position: absolute;
  left: 434px;
  top: 422px;
  overflow: visible;
  width: 13px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#ID12 {
  position: absolute;
  left: 530px;
  top: 422px;
  overflow: visible;
  width: 13px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#ID20 {
  position: absolute;
  left: 631px;
  top: 422px;
  overflow: visible;
  width: 13px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#Rp {
  position: absolute;
  left: 798px;
  top: 421px;
  overflow: visible;
  width: 15px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#ID30 {
  position: absolute;
  left: 835px;
  top: 421px;
  overflow: visible;
  width: 13px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
.Rectangle_16 {
  position: absolute;
  overflow: visible;
  width: 869px;
  height: 24px;
  left: 19px;
  top: 465px;
}
.Line_7 {
  overflow: visible;
  position: absolute;
  width: 1px;
  height: 22px;
  left: 44.5px;
  top: 465.968px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#ID5 {
  position: absolute;
  left: 28px;
  top: 470px;
  overflow: visible;
  width: 7px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 12px;
  color: rgba(255, 255, 255, 1);
  letter-spacing: -0.15px;
}
.Line_8 {
  overflow: visible;
  position: absolute;
  width: 1px;
  height: 23px;
  left: 413.671px;
  top: 465.5px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#ID7 {
  position: absolute;
  left: 399px;
  top: 470px;
  overflow: visible;
  width: 7px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 12px;
  color: rgba(255, 255, 255, 1);
  letter-spacing: -0.15px;
}
.Line_9 {
  overflow: visible;
  position: absolute;
  width: 1px;
  height: 22px;
  left: 390.044px;
  top: 465.968px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Received_By_Courier {
  position: absolute;
  left: 48px;
  top: 470px;
  overflow: visible;
  width: 99px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(255, 255, 255, 1);
  letter-spacing: -0.15px;
}
#Description_of_Contents {
  position: absolute;
  left: 427px;
  top: 470px;
  overflow: visible;
  width: 112px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(255, 255, 255, 1);
  letter-spacing: -0.15px;
}
.Rectangle_17 {
  position: absolute;
  overflow: visible;
  width: 869px;
  height: 73px;
  left: 19px;
  top: 488px;
}
.Path_10 {
  overflow: visible;
  position: absolute;
  width: 1px;
  height: 72px;
  left: 685.913px;
  top: 488.946px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.Path_11 {
  overflow: visible;
  position: absolute;
  width: 1px;
  height: 72px;
  left: 390.581px;
  top: 488.946px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.Path_12 {
  overflow: visible;
  position: absolute;
  width: 1px;
  height: 72px;
  left: 90px;
  top: 488.946px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.Path_13 {
  overflow: visible;
  position: absolute;
  width: 1px;
  height: 72px;
  left: 237.009px;
  top: 488.946px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.Line_10 {
  overflow: visible;
  position: absolute;
  width: 868.85px;
  height: 1px;
  left: 19.5px;
  top: 241.367px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.Line_11 {
  overflow: visible;
  position: absolute;
  width: 868.85px;
  height: 1px;
  left: 19px;
  top: 221.627px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.Line_12 {
  overflow: visible;
  position: absolute;
  width: 496.85px;
  height: 1px;
  left: 390.5px;
  top: 392.802px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.Line_13 {
  overflow: visible;
  position: absolute;
  width: 217px;
  height: 1px;
  left: 19.5px;
  top: 522.446px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.Line_14 {
  overflow: visible;
  position: absolute;
  width: 371.5px;
  height: 1px;
  left: 19px;
  top: 505.446px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.Path_14 {
  overflow: visible;
  position: absolute;
  width: 1px;
  height: 16.5px;
  left: 281.41px;
  top: 488.946px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.Line_15 {
  overflow: visible;
  position: absolute;
  width: 1px;
  height: 22px;
  left: 260.098px;
  top: 465.968px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#ID6 {
  position: absolute;
  left: 246px;
  top: 470px;
  overflow: visible;
  width: 7px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 12px;
  color: rgba(255, 255, 255, 1);
  letter-spacing: -0.15px;
}
.Line_16 {
  overflow: visible;
  position: absolute;
  width: 1px;
  height: 22px;
  left: 236.472px;
  top: 465.968px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.Line_17 {
  overflow: visible;
  position: absolute;
  width: 1px;
  height: 22px;
  left: 686.45px;
  top: 465.968px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Name________________c {
  position: absolute;
  left: 23px;
  top: 491px;
  overflow: visible;
  width: 73px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#Date {
  position: absolute;
  left: 23px;
  top: 507px;
  overflow: visible;
  width: 24px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#Signature {
  position: absolute;
  left: 23px;
  top: 524px;
  overflow: visible;
  width: 47px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#ID20_11_2019 {
  position: absolute;
  left: 93px;
  top: 507px;
  overflow: visible;
  width: 54px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#Name________________da {
  position: absolute;
  left: 247px;
  top: 491px;
  overflow: visible;
  width: 73px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#AIRA_B___MAMA_AZMI_____________c {
  position: absolute;
  left: 284px;
  top: 491px;
  overflow: visible;
  width: 147px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#ID1_da {
  position: absolute;
  left: 401px;
  top: 491px;
  overflow: visible;
  width: 7px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#ID6_db {
  position: absolute;
  left: 401px;
  top: 507px;
  overflow: visible;
  width: 7px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#US_ {
  position: absolute;
  left: 692px;
  top: 491px;
  overflow: visible;
  width: 22px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#US__dd {
  position: absolute;
  left: 692px;
  top: 509px;
  overflow: visible;
  width: 22px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#US__de {
  position: absolute;
  left: 692px;
  top: 527px;
  overflow: visible;
  width: 22px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#US__df {
  position: absolute;
  left: 692px;
  top: 545px;
  overflow: visible;
  width: 22px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#_ {
  position: absolute;
  left: 840px;
  top: 491px;
  overflow: visible;
  width: 5px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#__dh {
  position: absolute;
  left: 877px;
  top: 509px;
  overflow: visible;
  width: 5px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#__di {
  position: absolute;
  left: 877px;
  top: 527px;
  overflow: visible;
  width: 5px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#__dj {
  position: absolute;
  left: 877px;
  top: 545px;
  overflow: visible;
  width: 5px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#Signature__Sender_ {
  position: absolute;
  left: 266px;
  top: 470px;
  overflow: visible;
  width: 91px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(255, 255, 255, 1);
  letter-spacing: -0.15px;
}
#Customs_Value {
  position: absolute;
  left: 765px;
  top: 471px;
  overflow: visible;
  width: 66px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 11px;
  color: rgba(255, 255, 255, 1);
  letter-spacing: -0.15px;
}
#Credit {
  position: absolute;
  left: 175px;
  top: 415px;
  overflow: visible;
  width: 30px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
.Rectangle_18 {
  position: absolute;
  overflow: visible;
  width: 21px;
  height: 11px;
  left: 150px;
  top: 382px;
}
.Rectangle_19 {
  position: absolute;
  overflow: visible;
  width: 21px;
  height: 11px;
  left: 150px;
  top: 399px;
}
.Rectangle_20 {
  position: absolute;
  overflow: visible;
  width: 21px;
  height: 11px;
  left: 150px;
  top: 416px;
}
#exluding_insurance_and_import_ {
  position: absolute;
  left: 27px;
  top: 690px;
  overflow: visible;
  width: 348px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#Repeat_Grid_1 {
  position: absolute;
  width: 869px;
  height: 2px;
  left: 19px;
  top: 715px;
  overflow: hidden;
}
#Repeat_Grid_1_0 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 0.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18 {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_1 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 4.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_dv {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_2 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 8.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_dx {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_3 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 12.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_dz {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_4 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 16.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_d {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_5 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 20.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ea {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_6 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 24.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_eb {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_7 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 28.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ec {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_8 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 32.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ed {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_9 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 36.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ee {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_10 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 40.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ef {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_11 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 44.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_eg {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_12 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 48.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_eh {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_13 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 52.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ej {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_14 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 56.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_el {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_15 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 60.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_en {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_16 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 64.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ep {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_17 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 68.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_er {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_18 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 72.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_et {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_19 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 76.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ev {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_20 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 80.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ex {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_21 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 84.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ez {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_22 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 88.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_e {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_23 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 92.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_fa {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_24 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 96.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_fb {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_25 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 100.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_fc {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_26 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 104.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_fd {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_27 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 108.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_fe {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_28 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 112.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ff {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_29 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 116.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_fg {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_30 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 120.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_fh {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_31 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 124.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_fj {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_32 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 128.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_fl {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_33 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 132.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_fn {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_34 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 136.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_fp {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_35 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 140.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_fr {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_36 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 144.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ft {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_37 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 148.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_fv {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_38 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 152.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_fx {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_39 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 156.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_fz {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_40 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 160.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_f {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_41 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 164.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ga {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_42 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 168.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_gb {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_43 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 172.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_gc {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_44 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 176.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_gd {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_45 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 180.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ge {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_46 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 184.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_gf {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_47 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 188.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_gg {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_48 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 192.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_gh {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_49 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 196.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_gj {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_50 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 200.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_gl {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_51 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 204.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_gn {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_52 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 208.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_gp {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_53 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 212.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_gr {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_54 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 216.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_gt {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_55 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 220.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_gv {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_56 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 224.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_gx {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_57 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 228.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_gz {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_58 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 232.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_g {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_59 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 236.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ha {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_60 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 240.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_hb {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_61 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 244.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_hc {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_62 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 248.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_hd {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_63 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 252.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_he {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_64 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 256.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_hf {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_65 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 260.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_hg {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_66 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 264.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_hh {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_67 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 268.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_hj {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_68 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 272.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_hl {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_69 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 276.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_hn {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_70 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 280.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_hp {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_71 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 284.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_hr {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_72 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 288.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ht {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_73 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 292.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_hv {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_74 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 296.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_hx {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_75 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 300.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_hz {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_76 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 304.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_h {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_77 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 308.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ia {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_78 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 312.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ib {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_79 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 316.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ic {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_80 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 320.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_id {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_81 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 324.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ie {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_82 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 328.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_if {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_83 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 332.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ig {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_84 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 336.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ih {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_85 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 340.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ij {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_86 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 344.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_il {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_87 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 348.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_in {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_88 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 352.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ip {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_89 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 356.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ir {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_90 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 360.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_it {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_91 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 364.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_iv {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_92 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 368.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ix {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_93 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 372.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_iz {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_94 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 376.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_i {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_95 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 380.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ja {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_96 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 384.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_jb {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_97 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 388.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_jc {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_98 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 392.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_jd {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_99 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 396.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_je {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_100 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 400.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_jf {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_101 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 404.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_jg {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_102 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 408.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_jh {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_103 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 412.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_jj {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_104 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 416.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_jl {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_105 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 420.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_jn {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_106 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 424.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_jp {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_107 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 428.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_jr {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_108 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 432.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_jt {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_109 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 436.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_jv {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_110 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 440.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_jx {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_111 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 444.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_jz {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_112 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 448.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_j {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_113 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 452.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ka {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_114 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 456.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_kb {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_115 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 460.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_kc {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_116 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 464.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_kd {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_117 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 468.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ke {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_118 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 472.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_kf {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_119 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 476.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_kg {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_120 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 480.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_kh {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_121 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 484.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_kj {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_122 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 488.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_kl {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_123 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 492.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_kn {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_124 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 496.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_kp {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_125 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 500.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_kr {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_126 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 504.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_kt {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_127 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 508.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_kv {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_128 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 512.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_kx {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_129 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 516.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_kz {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_130 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 520.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_k {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_131 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 524.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_la {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_132 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 528.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_lb {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_133 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 532.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_lc {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_134 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 536.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ld {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_135 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 540.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_le {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_136 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 544.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_lf {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_137 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 548.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_lg {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_138 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 552.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_lh {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_139 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 556.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_lj {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_140 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 560.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ll {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_141 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 564.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ln {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_142 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 568.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_lp {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_143 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 572.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_lr {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_144 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 576.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_lt {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_145 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 580.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_lv {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_146 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 584.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_lx {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_147 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 588.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_lz {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_148 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 592.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_l {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_149 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 596.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ma {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_150 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 600.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_mb {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_151 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 604.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_mc {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_152 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 608.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_md {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_153 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 612.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_me {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_154 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 616.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_mf {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_155 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 620.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_mg {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_156 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 624.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_mh {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_157 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 628.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_mj {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_158 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 632.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ml {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_159 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 636.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_mn {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_160 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 640.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_mp {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_161 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 644.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_mr {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_162 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 648.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_mt {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_163 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 652.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_mv {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_164 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 656.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_mx {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_165 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 660.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_mz {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_166 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 664.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_m {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_167 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 668.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_na {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_168 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 672.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_nb {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_169 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 676.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_nc {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_170 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 680.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_nd {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_171 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 684.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ne {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_172 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 688.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_nf {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_173 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 692.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ng {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_174 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 696.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_nh {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_175 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 700.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_nj {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_176 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 704.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_nl {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_177 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 708.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_nn {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_178 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 712.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_np {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_179 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 716.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_nr {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_180 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 720.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_nt {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_181 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 724.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_nv {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_182 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 728.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_nx {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_183 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 732.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_nz {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_184 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 736.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_n {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_185 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 740.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_oa {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_186 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 744.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ob {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_187 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 748.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_oc {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_188 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 752.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_od {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_189 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 756.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_oe {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_190 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 760.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_of {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_191 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 764.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_og {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_192 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 768.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_oh {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_193 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 772.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_oj {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_194 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 776.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ol {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_195 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 780.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_on {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_196 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 784.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_op {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_197 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 788.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_or {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_198 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 792.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ot {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_199 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 796.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ov {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_200 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 800.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ox {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_201 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 804.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_oz {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_202 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 808.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_o {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_203 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 812.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_pa {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_204 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 816.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_pb {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_205 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 820.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_pc {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_206 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 824.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_pd {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_207 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 828.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_pe {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_208 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 832.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_pf {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_209 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 836.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_pg {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_210 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 840.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_ph {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_211 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 844.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_pj {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_212 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 848.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_pl {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_213 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 852.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_pn {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_214 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 856.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_pp {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_215 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 860.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_pr {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_216 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 864.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_pt {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Repeat_Grid_1_217 {
  position: absolute;
  width: 1px;
  height: 1px;
  left: 868.5px;
  top: 0.5px;
  overflow: visible;
}
.Line_18_pv {
  overflow: visible;
  position: absolute;
  width: 2px;
  height: 1px;
  left: 0px;
  top: 0px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
#Aldi {
  position: absolute;
  left: 93px;
  top: 492px;
  overflow: visible;
  width: 19px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#ID50 {
  position: absolute;
  left: 734px;
  top: 422px;
  overflow: visible;
  width: 13px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
.Rectangle_23 {
  position: absolute;
  overflow: visible;
  width: 21px;
  height: 11px;
  left: 22px;
  top: 432px;
}
#Cosmetic {
  position: absolute;
  left: 45px;
  top: 432px;
  overflow: visible;
  width: 46px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#MENTAHAN_JASKIPINcdr {
  position: absolute;
  width: 71px;
  height: auto;
  left: 28px;
  top: 55px;
  overflow: visible;
}
.Rectangle_24 {
  position: absolute;
  overflow: visible;
  width: 481px;
  height: 560px;
  left: 19px;
  top: 735px;
  border-radius: 10px;
}
#MENTAHAN_JASKIPINcdr_p {
  position: absolute;
  width: 71px;
  height: auto;
  left: 32px;
  top: 748px;
  overflow: visible;
}
.Rectangle_25 {
  position: absolute;
  overflow: visible;
  width: 183px;
  height: 24px;
  left: 32px;
  top: 729px;
}
#CONSIGNEE_____________________ {
  position: absolute;
  left: 32px;
  top: 848px;
  overflow: visible;
  width: 209px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 17px;
  letter-spacing: -0.15px;
}
#Name {
  position: absolute;
  left: 32px;
  top: 878px;
  overflow: visible;
  width: 53px;
  white-space: nowrap;
  text-align: left;
  font-family: Times New Roman;
  font-style: normal;
  font-weight: bold;
  font-size: 21px;
  line-height: 22px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#__Arif {
  position: absolute;
  left: 52px;
  top: 875px;
  overflow: visible;
  width: 49px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#Phone_Number {
  position: absolute;
  left: 32px;
  top: 902px;
  overflow: visible;
  width: 133px;
  white-space: nowrap;
  text-align: left;
  font-family: Times New Roman;
  font-style: normal;
  font-weight: bold;
  font-size: 21px;
  line-height: 22px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#___886907011096 {
  position: absolute;
  left: 52px;
  top: 899px;
  overflow: visible;
  width: 146px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#BLOK_PERINDU_8__H__JL_PERSIARA {
  position: absolute;
  left: 52px;
  top: 926px;
  overflow: visible;
  width: 170px;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
  word-wrap: break-word;
}
.Rectangle_26 {
  position: absolute;
  overflow: visible;
  width: 183px;
  height: 24px;
  left: 32px;
  top: 982px;
}
#SENDER________________________ {
  position: absolute;
  left: 350px;
  top: 848px;
  overflow: visible;
  width: 180px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 17px;
  letter-spacing: -0.15px;
}
#Name_qc {
  position: absolute;
  left: 350px;
  top: 878px;
  overflow: visible;
  width: 53px;
  white-space: nowrap;
  text-align: left;
  font-family: Times New Roman;
  font-style: normal;
  font-weight: bold;
  font-size: 21px;
  line-height: 22px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#__Adit_Nugraha {
  position: absolute;
  left: 370px;
  top: 875px;
  overflow: visible;
  width: 124px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#Phone_Number_qe {
  position: absolute;
  left: 350px;
  top: 902px;
  overflow: visible;
  width: 133px;
  white-space: nowrap;
  text-align: left;
  font-family: Times New Roman;
  font-style: normal;
  font-weight: bold;
  font-size: 21px;
  line-height: 22px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#__089772837265 {
  position: absolute;
  left: 370px;
  top: 899px;
  overflow: visible;
  width: 135px;
  white-space: nowrap;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#Cirebon___West_Java {
  position: absolute;
  left: 370px;
  top: 925px;
  overflow: visible;
  width: 166px;
  white-space: normal;
  text-align: left;
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#ADDRESS_CONSIGNEE {
  position: absolute;
  left: 32px;
  top: 927px;
  overflow: visible;
  width: 53px;
  white-space: nowrap;
  text-align: left;
  font-family: Times New Roman;
  font-style: normal;
  font-weight: bold;
  font-size: 21px;
  line-height: 22px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
#ADDRESS_RECEIPT {
  position: absolute;
  left: 350px;
  top: 927px;
  overflow: visible;
  width: 53px;
  white-space: nowrap;
  text-align: left;
  font-family: Times New Roman;
  font-style: normal;
  font-weight: bold;
  font-size: 21px;
  line-height: 22px;
  color: rgba(0, 0, 0, 1);
  letter-spacing: -0.15px;
}
</style>
