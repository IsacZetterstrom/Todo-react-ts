
import { ITodo } from './ITodo'
import { TTheme } from '../types/TThemes'
import { TUserRole } from '../types/TUser'
import Users from '../db/db';

export interface IUserSetting {
    preferredTheme: TTheme;
    expireAutomatically: boolean; // set todo to expire if expireAt passed
    sendReminder: boolean; // send close to deadline reminders
    reminderInterval: number; // time in ms to send reminder if sendReminder is true
}

export interface IUser {
    username: string;
    role: TUserRole;
    todos: ITodo[];
    settings: TUserRole;
  }
  