<template>
    <div class="container py-12">
		<div class="row">
			<h3 style="text-align: center; font-weight: 600;">個案委任書</h3>
		</div>
		<p>
			委任人________________為辦理貨物通關作業需要，茲依據關稅法第22條第1項規定，委任受任人(報關業者)_______________代為辦理貨物通關過程中依規定應為之各項手續，委託標的物為以下報單所載貨物：
		</p>
		<p>
			<span>□</span>進口報單第 <span style="margin-left: 30%;">號，分提單號碼:</span><span style="float: right;">(簡易申報必填)</span>
		</p>
		<p>
			□出口報單第<span style="margin-left: 30%;">號，分提單號碼:</span><span style="float: right;">(簡易申報必填)</span>
		</p>
		<p style="margin-bottom: 20px;">
			□轉運申請書
		</p>
		<p>
			□未取得快遞業者所提供申報內容，故檢附進口貨物：
		</p>
		<p>
			<span style="float: right;">□商業發票</span>	
		</p><br>
		<p>
			<span style="float: right;">□訂購單	如後。</span>
		</p><br>
		<p>
			<span style="float: right;">□其他證明文件，(如_______)</span>
		</p><br>
		<p>
			受任人對委託標的有為一切行為之權，並包括：簽認查驗結果、繳納稅費、提領或放棄貨物、認諾、收受	貴關有關本批貨物之一切通知與稅費繳納證等文件(或訊息)、領取報關貨物之貨樣，以及辦理出口貨物之退關、退關轉船、提領出倉等之特別委任權。
		</p>
		<p>
			為辦理C2進出口報單檢附文件無紙化作業，對於未蓋有委任人公司章及負責人專用章之電子化文件，確係由委任人所出具並提供受任人無訛。
		</p>
		<p>
			此致
		</p>
		<p>
			財政部關務署____關
		</p>
		<p>
			<strong><b>委任人：<span class="uppercase font-sans">{{ data.recipient_name }}</span></b> <span style="float: right;">(簽章)</span></strong>
		</p>
		<p style="margin-left: 40px;">
			負責人姓名:_________<span style="float: right;">(簽章)</span>
		</p>
		<p style="margin-left: 40px;">
			統一編號：	<b style="margin-right: 30px;"><span class="uppercase font-sans">{{ data.recipient_no_id }}</span></b>	海關監管編號：<b><span class="uppercase font-sans">{{ data.awb_no }}</span></b> 
		</p>
		<p style="margin-left: 40px;">
			地址：<b><span class="uppercase font-sans">{{ data.recipient_address }}</span></b>
		</p>
		<p style="margin-left: 40px;">
			電話：     <b><span class="uppercase font-sans">{{ data.recipient_phone }}</span></b>
		</p>
		<p>
			<b>受任人：</b> <span style="float: right;">(簽章)</span>
		</p>
		<p style="margin-left: 40px;">
			負責人姓名：	<span style="float: right;">(簽章)</span>
		</p>
		<p style="margin-left: 40px;">
			報關業者箱號：
		</p>
		<p style="margin-left: 40px;">電話：</p>
		<p style="margin-left: 40px;">地址：</p>
		<p>
			中	華	民	國_____年_____月_____日
		</p>
		<p>【填表說明】</p>
		<p>
			1.	書面委任書由報關人與納稅義務人共同簽署，已連線傳輸者，補送之非長期委任書免加蓋報關業及負責人章。
		</p>
		<p>
			2.	除依法令規定需繳驗紙本正本或須由海關書面核章之文件外，其餘以電子傳輸方式傳送之報關文件皆屬「電子化文件」	   之範疇（委任人仍應於本委任書簽章）。
		</p>
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
			cssText: ''
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
                const response = await axios.get(`${api_url}/api/v1/transaction/international-order/admin/get/${this.$route.params.id}`, { headers: this.headers });
                console.log(response);

                /* Set Data Selected */
                this.data = response.data.data[0];

                /* Print Page */
                setTimeout(function() {
                    window.print();
                }, 2000);
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
.container{
    width: 90%;
    margin:0 auto;
}
p{font-size: 14px;}
</style>