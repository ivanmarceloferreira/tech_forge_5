
export enum CustomerType {
    CLIENTE_NORMAL = "1",
    CLIENTE_VIP = "2",
    CLIENTE_GOLD = "3"
}

const TAX_VALUE = 0.17;

export function proccessOrder(orderAmount: any, 
                            customerType: CustomerType, 
                            shouldSendMail: boolean, 
                            shouldApplyTax: boolean) {
  
  let discountAmount = 0;
  let taxedAmount = 0;

  discountAmount = calculateDiscount(customerType, discountAmount, orderAmount);

  ({ discountAmount, taxedAmount } = validateTax(shouldApplyTax, discountAmount, orderAmount, taxedAmount));

  discountAmount = discountAmount + taxedAmount;

  console.log("saving...");
  console.log("value:", discountAmount);

  if (shouldSendMail) {
    console.log("send email to client");
  }

  console.log("relatorio:");
  console.log("cliente tipo:", customerType);
  console.log("total:", discountAmount);

  return discountAmount;
}

function validateTax(shouldApplyTax: boolean, discountAmount: number, orderAmount: any, taxedAmount: number) {
    if (shouldApplyTax) {
        discountAmount = discountAmount + (discountAmount * TAX_VALUE);
    }

    if (orderAmount > 1000) {
        taxedAmount = 0;
    } else {
        taxedAmount = 50;
    }
    return { discountAmount, taxedAmount };
}

function calculateDiscount(customerType: CustomerType, discountAmount: number, orderAmount: any) {
    if (customerType == CustomerType.CLIENTE_NORMAL) {
        discountAmount = orderAmount;
    } else if (customerType == CustomerType.CLIENTE_VIP) {
        discountAmount = orderAmount * 0.9;
    } else if (customerType == CustomerType.CLIENTE_GOLD) {
        discountAmount = orderAmount * 0.8;
    } else {
        discountAmount = orderAmount;
    }
    return discountAmount;
}

