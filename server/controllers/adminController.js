const User = require("../models/userModel")
const Event = require("../models/eventModel")
const Listing = require('../models/listingModel')
const Comment = require('../models/commentModel') 


const getAllUsers = async (req, res) => {
    const users = await User.find()

    if (!users) {
        res.status(404)
        throw new Error('Users Not Found!')
    }

    console.log(users)
    res.status(200).json(users)
}

const updateUser = async (req, res) => {
    
const updateUser = await User.findByIdAndUpdate(req.params.uid, req.body, { new: true})

if (!updateUser) {
    res.status(400)
    throw new Error('User Not Found!');   
}

res.status(200).json(updateUser)

}

const addEvent = async (req, res) => {
    const {eventName, eventDescription, eventImage, eventDate, status, location, availableSeats, organizer, price} = req.body

    if(!eventName || !eventDescription || !eventImage || !eventDate || !status || !location || !availableSeats || !organizer || !price){
        res.status(400)
        throw new Error("please Fill Details")
    }

    let newEvent = await Event.create({
        eventName,
        eventDescription,
        eventImage,
        eventDate,
        status,
        location,
        availableSeats,
        organizer,
        price
    })

    if(!newEvent){
        res.status(400)
        throw new Error('Event Not Created')
    }

    res.status(201).json(newEvent)
}


const updateEvent = async (req, res) => {
    const updateEvent = await Event.findByIdAndUpdate(req.params.eid, req.body, { new: true })

    if (!updateEvent) {
        res.status(400)
        throw new Error('Event Not Updated')
    }

   res.status(200).json(updateEvent)

}

const updateProductListing = async(req, res) => {
    const updatedlisting = await Listing.findByIdAndUpdate(req.params.pid, req.body ,).populate('user')
    
       if (!updatedlisting) {
        res.status(404)
        throw new Error('Product Not Updated!')
       }
    
       res.status(200).json(updatedlisting)
}

const getAllComments = async (req, res) => {
    
    const comments = await Comment.find().populate('user').populate('event')
    if (!comments) {
        res.status(404)
        throw new Error('Comments Not Found!')
    }

   res.status(200).json(comments)

}

module.exports = { getAllUsers, updateUser, addEvent, updateEvent, updateProductListing, getAllComments}