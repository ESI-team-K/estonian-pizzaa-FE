import http from "@/http-axios";

class dataaxios {
    getMenu() {
        return http.get("/menu");
    }
    getAllOrders() {
        return http.get("/orderList");
    }
    getOrder(id) {
        return http.get("/order/" + id + "/");
    }
    confirmOrder(id) {
        return http.put('/order/' + id + '/confirm');
    }
    createOrder(menuItemArray) {
        return http.post('/order/create', menuItemArray);
    }
    
    sendCancelReq(id) {
        return http.put('/order/' + id + '/cancel/');
    }

    async cancelOrder(id) {
        const firstResponse = await http.put('/order/' + id + '/cancel/');
        const secondResponse = http.put('/order/' + id + '/cancel/approve');
        return [firstResponse, secondResponse]
    }
    
    async cancelAndRefundOrder(id) {
        const firstResponse = await http.put('/order/' + id + '/cancel/');
        const secondResponse = http.put('/order/' + id + '/cancel/approve');
        return [firstResponse, secondResponse]
        // TODO: Also refund..?
    }

    getAllNotifications() {
        return http.get("/notifications");    
    }
    getUserNotifications(id) {
        return http.get(`/notifications/user/${id}`);    
    }
}
export default new dataaxios();