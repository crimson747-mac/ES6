// destructuring: object나 array, 그 외 요소들 안의 변수를 바깥으로
// 끄집어 내서 사용할 수 있도록 하는 것

const settings = {
    notifications: {
        follow: true,
        alerts: true,
        unfollow: false
    },
    color: {
        theme: 'dark'
    }
};

const {notifications} = settings;
console.log(notifications);

const {notifications: { follow }, color } = settings;
console.log(follow);
console.log(color);

// 없을 경우 해당 element를 만들어 준다.
const {notifications: {save = "yes"}} = settings;
console.log(save)

const {notifications: {display = false} = {}} = settings;
console.log(display);