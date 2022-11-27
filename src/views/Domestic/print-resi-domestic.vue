<template>
    <div class="container">
        <div class="pengirim_penerima">
            <img src="@/assets/logo-asli-white.png" width="100" style="margin: 0px; margin-bottom:10px;">
            <div class="kota_pengirim">
                <div class="pengirim">
                    <table>
                        <tr>
                            <td>Kota Asal</td><td>:</td>
                            <td>{{ data.branch ? data.branch.city_name : '-' }}</td>
                        </tr>
                        <tr>
                            <td>No Order</td><td>:</td>
                            <td>{{ data.shipment_number }}</td>
                        </tr>
                    </table>
                </div>
                <div class="kota">
                    <table>
                        <tr>
                            <td>Kota Tujuan</td><td>:</td>
                            <td>{{ data.city }}</td>
                        </tr>
                        <tr>
                            <td>Pembayaran</td><td>:</td>
                            <td>CASH</td>
                        </tr>
                    </table>
                </div>
            </div><hr>
            <table>
                <tr>
                    <td>Pengirim</td><td>:</td><td>{{ data.sender_name }}</td>
                </tr>
                <tr>
                    <td>Alamat</td><td>:</td><td>{{ data.sender_address }}</td>
                </tr>
                <tr>
                    <td>Kode POS</td><td>:</td><td>-</td>
                </tr>
                <tr>
                    <td>Telepon</td><td>:</td><td>{{ data.sender_phone }}</td>
                </tr>
            </table><br><br>
            <table>
                <tr>
                    <td>Penerima</td><td>:</td><td>{{ data.recipient_name }}</td>
                </tr>
                <tr>
                    <td>Alamat</td><td>:</td><td>{{ data.recipient_address }}</td>
                </tr>
                <tr>
                    <td>Kode POS</td><td>:</td><td>{{ data.recipient_postal_code }}</td>
                </tr>
                <tr>
                    <td>Telepon</td><td>:</td><td>{{ data.recipient_phone }}</td>
                </tr>
            </table>
        </div>
        <div class="deskripsi">
            <p>DESKRIPSI</p>
            <p>Pengiriman Via : Darat</p>
            <table id="deskripsi" >
                <thead>
                    <tr>
                        <th>Resi</th>
                        <th>Mitra</th>
                        <th>Layanan</th>
                        <th>Tanggal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{ data.awb_no }}</td>
                        <td>{{ data.courier }}</td>
                        <td>Regular</td>
                        <td>{{ formatDate(data.createdAt) }}</td>
                    </tr>
                </tbody>
            </table>
            <br>
            <tr>
                <td>Keterangan</td><td> : </td><td>{{ data.content_info }}</td>
            </tr>
            <br/>

            <div class="kota_pengirim">
                <div class="pengirim">
                    <table>
                        <tr>
                            <td>Jumlah</td>
                        </tr>
                        <tr>
                            <td>Berat</td>
                        </tr>
                        <tr>
                            <td>Biaya</td>
                        </tr>
                        <tr>
                            <td>Asuransi</td>
                        </tr>
                    </table>
                </div>
                <div class="kota">
                    <table>
                        <tr>
                            <td>{{ data.bag_amount }}</td>
                        </tr>
                        <tr>
                            <td>{{ data.weight }}Kg</td>
                        </tr>
                        <tr>
                            <td>{{ data.shipment_fee ? 'Rp'+formatPrice(data.shipment_fee) : 'Rp0' }}</td>
                        </tr>
                        <tr>
                            <td>Rp0</td>
                        </tr>
                    </table>
                </div>
            </div><hr>
            <div style="display: flex; justify-content: space-between;">
                <table>
                    <tr>
                        <td><b>Total Biaya</b></td><td>:</td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td><b>{{ data.shipment_fee ? 'Rp'+formatPrice(data.shipment_fee) : 'Rp0' }}</b></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { api_url } from '@/config/api';
import Printd from 'printd';

export default {
    data() {
        return {
            /* Auth Token */
            headers: JSON.parse(window.localStorage.getItem('token-auth-jaskipin')),
            /* Data List */
            data: [],
            input_by: '',
            courierData: [],
            cssText: [
                `*{
                    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                    box-sizing: border-box;
                }
                .container{
                    width:90%;
                    margin: 20px auto;
                    display: flex;
                    justify-content: space-between;
                    border: 2px solid #564d4d;
                    border-radius: 5px;
                    padding: 15px;
                    font-size: 12px;
                    line-height: 18px;
                }
                .kota_pengirim{
                    display: flex;
                    justify-content:space-between;
                }
                .pengirim_penerima{width:47%;margin-top: 10px;}
                .deskripsi{width:47%}
                #deskripsi {
                    font-family: Arial, Helvetica, sans-serif;
                    border-collapse: collapse;
                    width: 100%;
                }

                #deskripsi td, #deskripsi th {
                    border: 1px solid #ddd;
                    padding: 8px;
                }
                #deskripsi th {
                    padding-top: 12px;
                    padding-bottom: 12px;
                    text-align: left;
                    background-color: #f2f2f2;
                    color: #333333;
                }`
            ]
        }
    },
    created() {
        this.getDetailOrder();

        /* Config Print */
        this.d = new Printd()
        const { contentWindow } = this.d.getIFrame()
        contentWindow.addEventListener(
            'beforeprint', () => console.log('before print event!')
        )
        contentWindow.addEventListener(
            'afterprint', () => console.log('after print event!')
        )
    },
    methods: {
        async getDetailOrder() {
            try {
                const response = await axios.get(`${api_url}/api/v1/transaction/domestic-order/admin/get/${this.$route.params.id}`, { headers: this.headers });
                console.log(response);

                /* Set Data Selected */
                this.data = response.data.data[0];
                this.getInputBy(response.data.data[0].input_by);
                this.getListCourier();

                /* Print Page */
                // setTimeout(function() {
                //     window.print();
                // }, 2000);
                setTimeout(function () { this.printPage() }.bind(this), 2000);
            }catch (error) {
                console.log(error);
            }
        },
        async getInputBy(id) {
            try {
                const response = await axios.get(`${api_url}/api/v1/users/user/get/${id}`, { headers: this.headers });
                console.log(response);
                /* Set Data Selected */
                this.input_by = response.data.data[0];
            }catch (error) {
                console.log(error);
            }
        },
        async getListCourier() {
            let query_params = {
                pagination: false
            }

            try {
                const response = await axios.get(`${api_url}/api/v1/shipping-rates/courier/admin`, { params: query_params, headers: this.headers });
                console.log(response);
                response.data.map(item => {
                    if(item.courier_type == 'International'){
                        if(item.courier_name === this.data.courier){
                            this.courierData = item
                        }
                    }
                });
            }catch (error) {
                console.log(error);
            }
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
        async printPage() {
            await this.d.print( this.$el, [this.cssText])
        }
    }
}
</script>

<style scoped>
*{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    box-sizing: border-box;
}
.container{
    width:90%;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    border: 2px solid #564d4d;
    border-radius: 5px;
    padding: 15px;
    font-size: 12px;
    line-height: 18px;
}
.kota_pengirim{
    display: flex;
    justify-content:space-between;
}
.pengirim_penerima{width:47%;margin-top: 10px;}
.deskripsi{width:47%}
#deskripsi {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

#deskripsi td, #deskripsi th {
    border: 1px solid #ddd;
    padding: 8px;
}
#deskripsi th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #f2f2f2;
    color: #333333;
}
</style>