import { Todo } from './Todo'
import { Theme } from '../types/Themes'
import { UserRole } from '../types/User'

export interface UserSetting {
    preferredTheme: Theme;
    expireAutomatically: boolean; // set todo to expire if expireAt passed
    sendReminder: boolean; // send close to deadline reminders
    reminderInterval: number; // time in ms to send reminder if sendReminder is true
}

export interface User {
    username: string;
    role: UserRole;
    todos: Todo[];
    settings: UserSetting;
  }
  