const { useContext } = require("react")



export dedafault function customerLogin() {
    const [customer, setCustomer] = useContext(userContext);
    console.log(customer)
}