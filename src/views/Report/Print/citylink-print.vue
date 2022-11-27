<template>
    <div>
        <table cellspacing="0" border="0" style="width: 95%">
            <colgroup width="25"></colgroup>
            <colgroup width="94"></colgroup>
            <colgroup span="4" width="90"></colgroup>
            <tr>
                <td height="20" align="left" valign=bottom><font color="#000000"><br></font></td>
                <td colspan=2 rowspan=5 align="left" valign=bottom><font color="#000000"><br>
                <img src="@/assets/citylink.jpg" width=150 height=70 hspace=3 vspace=4>
                </font></td>
                <td align="left" valign=bottom><font color="#000000"><br></font></td>
                <td align="left" valign=bottom><font color="#000000"><br></font></td>
                <td align="left" valign=bottom><font color="#000000"><br></font></td>
            </tr>
            <tr>
                <td height="20" align="left" valign=bottom><font color="#000000"><br></font></td>
                <td align="left" valign=bottom><font color="#000000"><br></font></td>
                <td align="left" valign=bottom><font color="#000000"><br></font></td>
                <td align="left" valign=bottom><font color="#000000"><br></font></td>
            </tr>
            <tr>
                <td height="20" align="left" valign=bottom><font color="#000000"><br></font></td>
                <td align="left" valign=bottom><font color="#000000"><br></font></td>
                <td colspan=2 rowspan=3 align="center" valign=bottom sdval="0" sdnum="1033;"><font face="barcode font" size=7 color="#000000">
                <div class="bar">
                    <svg id="barcode"></svg>
                </div>
                    {{ generateBarcode(data.awb_no) }}
                </font></td>
                </tr>
            <tr>
                <td height="20" align="left" valign=bottom><font color="#000000"><br></font></td>
                <td align="left" valign=bottom><font color="#000000"><br></font></td>
                </tr>
            <tr>
                <td rowspan=5 height="100" align="left" valign=bottom><font color="#000000"><br>
                <!-- img -->
                </font></td>
                <td align="left" valign=bottom><font color="#000000"><br></font></td>
                </tr>
            <tr>
                <td align="left" valign=bottom><font color="#000000"><br></font></td>
                <td align="left" valign=bottom><font color="#000000"><br></font></td>
                <td align="left" valign=bottom><font color="#000000"><br></font></td>
                <td align="left" valign=bottom><font color="#000000"><br></font></td>
                <td align="left" valign=bottom><font color="#000000"><br></font></td>
            </tr>
            <tr>
                <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="left" valign=middle bgcolor="#FFFFFF"><font face="Arial" color="#000000">SENDER     :</font></td>
                <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-right: 1px solid #000000" colspan=4 align="left" valign=middle bgcolor="#FFFFFF" sdval="0" sdnum="1033;"><font face="Arial" color="#000000">{{ data.sender_name }}</font></td>
                </tr>
            <tr>
                <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="left" valign=middle bgcolor="#FFFFFF"><font face="Arial" color="#000000">TELPHONE:</font></td>
                <td style="border-bottom: 1px solid #000000; border-right: 1px solid #000000" colspan=4 align="left" valign=middle bgcolor="#FFFFFF" sdval="0" sdnum="1033;"><font face="Arial" color="#000000">{{ data.sender_phone }}</font></td>
                </tr>
            <tr>
                <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=5 align="right" valign=middle bgcolor="#FFFFFF" sdval="0" sdnum="1033;"><font face="Arial" size=1 color="#000000"><p style="text-align: left;">{{ data.sender_address }}</p></font></td>
                </tr>
            <tr>
                <td height="25" align="left" valign=bottom><font color="#000000"><br></font></td>
                <td style="border-top: 1px solid #000000; border-left: 1px solid #000000;" colspan=2 align="center" valign=middle bgcolor="#FFEADA" sdval="0" sdnum="1033;"><b><font face="Arial" size=4 color="#000000">Prepaid</font></b></td>
                <td style="border-top: 1px solid #000000; border-right: 1px solid #000000" colspan=3 align="center" valign=middle bgcolor="#FFEADA" sdval="0" sdnum="1033;"><b><font face="Arial" size=4 color="#000000"></font></b></td>
                </tr>
            <tr>
                <td height="20" align="left" valign=bottom><font color="#000000"><br></font></td>
                <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="left" valign=middle bgcolor="#FFFFFF"><font face="Arial" color="#000000">RECEIVER  :</font></td>
                <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-right: 1px solid #000000" colspan=4 align="left" valign=middle bgcolor="#FFFFFF" sdval="0" sdnum="1033;"><font face="Arial" color="#000000">{{ data.recipient_name }}</font></td>
                </tr>
            <tr>
                <td height="20" align="left" valign=bottom><font color="#000000"><br></font></td>
                <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000" colspan=2 align="left" valign=middle bgcolor="#FFFFFF"><b><font face="Arial" color="#000000">Order No: {{ data.recipient_no_id }}</font></b></td>
                <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="left" valign=middle bgcolor="#FFFFFF"><font face="Arial" color="#000000">Tel.</font></td>
                <td style="border-bottom: 1px solid #000000; border-right: 1px solid #000000" colspan=2 align="left" valign=middle bgcolor="#FFFFFF" sdval="0" sdnum="1033;"><font face="Arial" color="#000000">{{ data.recipient_phone }}</font></td>
                </tr>
            <tr>
                <td height="24" align="left" valign=bottom><font color="#000000"><br></font></td>
                <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=5 rowspan=4 align="center" valign=middle bgcolor="#FFFFFF" sdval="0" sdnum="1033;"><font face="Arial" color="#000000">{{ data.recipient_address }}</font></td>
                </tr>
            <tr>
                <td height="24" align="left" valign=bottom><font color="#000000"><br></font></td>
                </tr>
            <tr>
                <td height="24" align="left" valign=bottom><font color="#000000"><br></font></td>
                </tr>
            <tr>
                <td height="24" align="left" valign=bottom><font color="#000000"><br></font></td>
                </tr>
            <tr>
                <td height="22" align="left" valign=bottom><font color="#000000"><br></font></td>
                <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign=middle bgcolor="#FFEADA"><b><font face="Arial" color="#000000">Postcode :</font></b></td>
                <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFEADA" sdval="0" sdnum="1033;"><b><font face="Arial" color="#000000">{{ data.recipient_postal_code }}</font></b></td>
                <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=2 align="center" valign=middle bgcolor="#FFEADA" sdval="0" sdnum="1033;"><b><font face="Arial" color="#000000">Koli</font></b></td>
                <td style="border-top: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFEADA" sdnum="1033;0;@"><b><font face="Arial" size=3 color="#000000">{{ data.bag_amount }}/{{ data.bag_amount }}</font></b></td>
            </tr>
            <tr>
                <td height="37" align="left" valign=bottom><font color="#000000"><br></font></td>
                <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="left" valign=middle bgcolor="#FFFFFF"><font face="Arial" color="#000000">Remark      :</font></td>
            
                <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-right: 1px solid #000000" colspan=4 align="center" valign=middle bgcolor="#FFFFFF" sdval="0" sdnum="1033;"><font face="Arial" color="#000000">
            <!-- <?php
            foreach ($deskripsi->result_array() as $sws):
                        $id_order=$sws['id_order'];
                        $nama_barang=$sws['nama_barang'];
                                    
                            ?>
                <?=strtoupper($nama_barang); ?>
                    
                    <?php endforeach; ?> -->
                    <span v-for="(item, index) in data.detail_item" :key="index" style="line-height: 18px">
                        {{ item.item_name }}<span v-if="data.detail_item.length != index + 1">,</span>
                    </span>
                </font></td>
                </tr>
            <tr>
                <td height="20" align="left" valign=bottom><font color="#000000"><br></font></td>
                <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=3 rowspan=4 align="center" valign=middle bgcolor="#FFEADA"><b><font face="Arial" size=6 color="#000000">{{ data.shipment_number }}</font></b></td>
                <td style="border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="left" valign=middle bgcolor="#FFFFFF"><font face="Arial" size=1 color="#000000">Date         :</font></td>
                <td style="border-bottom: 1px solid #000000; border-right: 1px solid #000000" align="left" valign=middle bgcolor="#FFFFFF" sdval="0" sdnum="1033;0;DD/MM/YYYY;@"><font face="Arial" size=1 color="#000000">{{ formatDate(data.createdAt) }}</font></td>
            </tr>
            <tr>
                <td height="20" align="left" valign=bottom><font color="#000000"><br></font></td>
                <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="left" valign=middle bgcolor="#FFFFFF"><font face="Arial" size=1 color="#000000">QTY         : </font></td>
                <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-right: 1px solid #000000" align="left" valign=middle bgcolor="#FFFFFF" sdval="0" sdnum="1033;"><font face="Arial" size=1 color="#000000">{{ data.bag_amount }}</font></td>
            </tr>
            <tr>
                <td height="20" align="left" valign=bottom><font color="#000000"><br></font></td>
                <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="left" valign=middle bgcolor="#FFFFFF"><font face="Arial" size=1 color="#000000">Weight     : </font></td>
                <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-right: 1px solid #000000; text-align: left;" align="right" valign=middle bgcolor="#FFFFFF" sdval="0" sdnum="1033;"><font face="Arial" size=1 color="#000000">{{ data.weight }}</font></td>
            </tr>
            <tr>
                <td height="20" align="left" valign=bottom><font color="#000000"><br></font></td>
                <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000" align="left" valign=middle bgcolor="#FFFFFF"><font face="Arial" size=1 color="#000000">Volume        : </font></td>
                <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-right: 1px solid #000000; text-align: left;" align="right" valign=middle bgcolor="#FFFFFF" sdval="0" sdnum="1033;"><font face="Arial" size=1 color="#000000">{{ parseInt(data.long) * parseInt(data.wide) * parseInt(data.height) / 5000 }}</font></td>
            </tr>
            <tr>
                <td height="31" align="left" valign=bottom><font color="#000000"><br></font></td>
                <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFFF"><font face="Tahoma" color="#000000">P</font></td>
                <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign=middle bgcolor="#FFFFFF"><font face="Arial" color="#A3A3A3">Signature</font></td>
                <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=3 rowspan=3 align="center" valign=middle bgcolor="#FFFFFF" sdval="0" sdnum="1033;0;0"><font face="barcode font" size=7 color="#000000">
                <svg id="barcode"></svg>
                {{ generateBarcode(data.awb_no) }}
                </font></td>
                </tr>
            <tr>
                <td height="20" align="left" valign=bottom><font color="#000000"><br></font></td>
                <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFFF"><font face="Tahoma" color="#000000">O</font></td>
                <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" rowspan=2 align="left" valign=middle bgcolor="#FFFFFF"><font face="Arial" color="#000000">Name : </font></td>
                </tr>
            <tr>
                <td height="20" align="left" valign=bottom><font color="#000000"><br></font></td>
                <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFFF"><font face="Tahoma" color="#000000">D</font></td>
                </tr>
            <tr>
                <td height="20" align="left" valign=bottom><font color="#000000"><br></font></td>
                <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign=middle bgcolor="#FFFFFF"><font color="#000000"><br></font></td>
                <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign=middle bgcolor="#FFFFFF"><font face="Arial" color="#000000">IC : </font></td>
                <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=3 align="left" valign=middle bgcolor="#FFFFFF"><font face="Arial" color="#000000">COD : </font></td>
                </tr>
            <tr>
                <td height="38" align="left" valign=bottom><font color="#000000"><br></font></td>
                <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFFF"><font face="Tahoma" color="#000000">P</font></td>
                <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign=middle bgcolor="#FFFFFF"><font face="Arial" color="#A3A3A3">Signature</font></td>
                <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=3 rowspan=3 align="center" valign=middle bgcolor="#FFFFFF" sdval="0" sdnum="1033;0;0"><font face="barcode font" size=7 color="#000000">
                <svg id="barcode"></svg>
                {{ generateBarcode(data.awb_no) }}
                </font></td>
                </tr>
            <tr>
                <td height="20" align="left" valign=bottom><font color="#000000"><br></font></td>
                <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFFF"><font face="Tahoma" color="#000000">O</font></td>
                <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" rowspan=2 align="left" valign=middle bgcolor="#FFFFFF"><font face="Arial" color="#000000">Name : </font></td>
                </tr>
            <tr>
                <td height="20" align="left" valign=bottom><font color="#000000"><br></font></td>
                <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFFF"><font face="Tahoma" color="#000000">D</font></td>
                </tr>
            <tr>
                <td height="20" align="left" valign=bottom><font color="#000000"><br></font></td>
                <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign=middle bgcolor="#FFFFFF"><font color="#000000"><br></font></td>
                <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign=middle bgcolor="#FFFFFF"><font face="Arial" color="#000000">IC : </font></td>
                <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=3 align="left" valign=middle bgcolor="#FFFFFF"><font face="Arial" color="#000000">COD : </font></td>
                </tr>
            <tr>
                <td height="38" align="left" valign=bottom><font color="#000000"><br></font></td>
                <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFFF"><font face="Tahoma" color="#000000">P</font></td>
                <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign=middle bgcolor="#FFFFFF"><font face="Arial" color="#A3A3A3">Signature</font></td>
                <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=3 rowspan=3 align="center" valign=middle bgcolor="#FFFFFF" sdval="0" sdnum="1033;0;0"><font face="barcode font" size=7 color="#000000"> 
                <svg id="barcode"></svg>
                    {{ generateBarcode(data.awb_no) }}
                </font></td>
                </tr>
            <tr>
                <td height="20" align="left" valign=bottom><font color="#000000"><br></font></td>
                <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFFF"><font face="Tahoma" color="#000000">O</font></td>
                <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" rowspan=2 align="left" valign=middle bgcolor="#FFFFFF"><font face="Arial" color="#000000">Name : </font></td>
                </tr>
            <tr>
                <td height="20" align="left" valign=bottom><font color="#000000"><br></font></td>
                <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="center" valign=middle bgcolor="#FFFFFF"><font face="Tahoma" color="#000000">D</font></td>
                </tr>
            <tr>
                <td height="20" align="left" valign=bottom><font color="#000000"><br></font></td>
                <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign=middle bgcolor="#FFFFFF"><font color="#000000"><br></font></td>
                <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" align="left" valign=middle bgcolor="#FFFFFF"><font face="Arial" color="#000000">IC : </font></td>
                <td style="border-top: 1px solid #000000; border-bottom: 1px solid #000000; border-left: 1px solid #000000; border-right: 1px solid #000000" colspan=3 align="left" valign=middle bgcolor="#FFFFFF"><font face="Arial" color="#000000">COD : </font></td>
                </tr>
            </table>
    </div>
</template>

<script>
import axios from 'axios';
import { api_url } from '@/config/api';

export default {
    data() {
        return {
            /* Auth Token */
            headers: JSON.parse(window.localStorage.getItem('token-auth-jaskipin')),
            /* Data List */
            data: [],
        }
    },
    created() {
        this.getDetailOrder();
    },
    methods: {
        async getDetailOrder() {
            try {
                const response = await axios.get(`${api_url}/api/v1/transaction/international-order/admin/get/${this.$route.params.id}`, { headers: this.headers });
                console.log(response);

                /* Set Data Selected */
                this.data = response.data.data[0];

                if(this.data.awb_no == ''){
                    this.$router.push('/report/citylink')
                    return  
                }

                /* Print Page */
                setTimeout(function() {
                    window.print();
                }, 2000);
            }catch (error) {
                console.log(error);
            }
        },
        generateBarcode(value) {
            let JsBarcode = require('jsbarcode');
            JsBarcode('#barcode', value)
        },
        formatDate(value) {
            let options = { year: 'numeric', month: 'long', day: 'numeric' };
            let date = new Date(value).toLocaleString('en-EN', options);
            return date;
        },
        formatPrice(number) {
            var rupiah = '';		
            var angkarev = number.toString().split('').reverse().join('');
            for(var i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
            return rupiah.split('',rupiah.length-1).reverse().join('');
        },
    }
}
</script>

<style scoped>
a.comment-indicator:hover + comment { background:#ffd; position:absolute; display:block; border:1px solid black; padding:0.5em;  } 
a.comment-indicator { background:red; display:inline-block; border:1px solid black; width:0.5em; height:0.5em;  } 
comment { display:none;  } 
svg#barcode {
    width: 150px;
    margin: -40px;
}
</style>