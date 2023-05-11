const express=require('express')
const protect = require('../middlware/Token')
const { booksData, booksdetails, deletbook, upadateBook,  bookget } = require('../RouterControler/BookControl')
const { signup, Login, adminlogin, createadmin } = require('../RouterControler/Controler')
const { addClient, getClient, deleteclient, updateClient, clientidget } = require('../RouterControler/ClientControler')
const { addCustomer, getCustomer, deleteCustomer, updatecustomer, Customeridget } = require('../RouterControler/CustomerControl')
const { addTeamMember, getTeamMember, deleteTeamMember, updateTeamMember, TeamMemberidget } = require('../RouterControler/TeamMemberControler')
const { addOrder, getorder, deleteorder, updateorder, orderidget } = require('../RouterControler/OrderControler')
const { addtocart, cart, removeitemfromcart } = require('../RouterControler/addtocart')

 const routes=express.Router()

 const midleware=[protect]

 routes.route('/signUp').post(signup)
 routes.route('/Login').post(Login)
 routes.route('/adminLogin').post(adminlogin)
 routes.route('/Createadmin').post(createadmin)
 routes.route('/tokenverifysign').get(midleware,signup)
 routes.route('/tokenverifylogin').get(midleware,Login)
 routes.route('/addBooks').post(booksData)
 routes.route('/Books').get(booksdetails)
 routes.route('/Books/:id').delete(deletbook)
 routes.route('/Booksupdate/:id').put(upadateBook)
 routes.route('/find/:id').get(bookget)
 routes.route('/addClient').post(addClient)
 routes.route('/Clients').get(getClient)
 routes.route('/Clientdelete/:id').delete(deleteclient)
 routes.route('/clientUpdate/:id').put(updateClient)
 routes.route('/findclient/:id').get(clientidget)
 routes.route('/addCustomer').post(addCustomer)
 routes.route('/Customer').get(getCustomer)
 routes.route('/deleteCustomer/:id').delete(deleteCustomer)
 routes.route('/updateCustomer/:id').put(updatecustomer)
 routes.route('/findCustomer/:id').get(Customeridget)
 routes.route('/addTeammember').post(addTeamMember)
 routes.route('/Teammember').get(getTeamMember)
 routes.route('/deletTeammember/:id').delete(deleteTeamMember)
 routes.route('/updateTeammember/:id').put(updateTeamMember)
 routes.route('/findTeammember/:id').get(TeamMemberidget)
 routes.route('/addorder').post(addOrder)
 routes.route('/Order').get(getorder)
 routes.route('/deleteorder/:id').delete(deleteorder)
 routes.route('/updateorder/:id').put(updateorder)
 routes.route('/findorder/:id').get(orderidget)
 routes.route('/addtocart').put(addtocart)
 routes.route('/removeitem').put(removeitemfromcart)
 routes.route('/Cart').post(cart)












 module.exports=routes