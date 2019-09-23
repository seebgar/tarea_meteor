import { Mongo } from 'meteor/mongo'

export const Tasks = new Mongo.Collection('tasks');

export const Profile = new Mongo.Collection('profile');