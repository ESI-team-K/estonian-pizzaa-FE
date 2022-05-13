import http from "@/http-axios";

class dataaxios {
    getMenu() {
        return http.get("/menu");
    }
    getAllOrders() {
        return http.get("/orderList");
    }
    
    confirmOrder(id) {
        return http.put('/order/' + id + '/confirm');
    }
    
    async cancelOrder(id) {
        const [firstResponse, secondResponse] = await Promise.all([
            http.put('/order/' + id + '/cancel/'),
            http.put('/order/' + id + '/cancel/approve')
          ]);
        return [firstResponse, secondResponse]
    }
    
    async cancelAndRefundOrder(id) {
        const [firstResponse, secondResponse] = await Promise.all([
            http.put('/order/' + id + '/cancel/'),
            http.put('/order/' + id + '/cancel/approve')
          ]);
        return [firstResponse, secondResponse]
        // TODO: Also refund..?
    }
}
export default new dataaxios();