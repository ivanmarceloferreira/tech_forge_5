class NotificationService {
    send() {
        console.log("Mensagem enviada...");
    }
}

class EmailNotification extends NotificationService {
    send() {
        console.log("Mensagem enviada por email...");
    }
}

class SmsNotification extends NotificationService {
    send() {
        console.log("Mensagem enviada por sms...");
    }
}

class NotificationFactory {
    static create(type: string): NotificationService {
        if (type == "mail") {
            return new EmailNotification();
        }
        
        if (type == "sms") {
            return new SmsNotification();
        }

        throw new Error("Tipo desconhecido");
    }
}

const type = "mail";

let notificacaoService = NotificationFactory.create(type);
notificacaoService.send();