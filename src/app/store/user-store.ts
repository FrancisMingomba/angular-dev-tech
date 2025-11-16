import { inject, signal } from "@angular/core";
import { User } from "../interface/user";
import { SignupService } from "../services/signup-service";


export class UserStore{
    users = signal<User[]>([]);
    api = inject(SignupService);

    constructor(){
        this.loadUsers();
    }

    loadUsers(){
        this.api.getUsers().subscribe((users) => {
            this.users.set(users);
        });
    }

    addUser(user:User){
       // user.id = (this.users().length + 1).toString;
       this.api.addUser(user).subscribe((result) => {
        console.log('User added:', result);
          this.users.update((users) => {
            return [...users, user];
        });
       })
      
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

deleteUser(user:User){
    this.users.update((users) => {
        return users.filter(u => u.id !== user.id);
    })
 }


}