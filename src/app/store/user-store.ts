import { signal } from "@angular/core";
import { User } from "../interface/user";


export class UserStore{
    users = signal<User[]>([]);

    addUser(user:User){
        user.id = (this.users().length + 1).toString;
        this.users.update((users) => {
            return [...users, user];
        });
    }

    updateUser(user:User){
        this.users.update((users) => {
            return users.map(u => u.id === user.id ? user : u);
        });
    }

   /* updataUserX(user:User){
        this.users.update((users) => {
            return users.map((u) => {
                if(u.id === user.id){
                    return user;
                }
                return u;   
        });
    });
}
*/
}