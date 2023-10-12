function make_withdraw(balance, password) {
    let tries = 0;
    function withdraw(amount, input_password) {
        if (tries >= 3) {
            return "Account disabled";
        } else if (input_password !== password) {
            tries = tries + 1;
            return "Wrong password; no withdraw";
        } else {
            tries = 0;
            balance = balance - amount;
            return balance;
        }
    }
    return withdraw;
}

const acc = make_withdraw(100, "my_password");
display(acc(30, "his_passcode")); // returns "Wrong password; no withdraw"
display(acc(30, "my_password")); // returns 70
display(acc(10, "sesame")); // returns "Wrong password; no withdraw"
display(acc(15, "canola")); // returns "Wrong password; no withdraw"
display(acc(25, "olive")); // returns "Wrong password; no withdraw"
display(acc(30, "my_password")); // returns "Account disabled"
display(acc(30, "his_passcode")); // returns "Account disabled"

0;
