# My CV RS School
## _**Name:**_ Alexey Kuzniecov
**Contact with me**
* _**Email:**_ _alexeyk90@gmail.com_
* _**Telegram (my main messenger):**_ <https://t.me/VincentGreen>

**About me:** A beginner developer with a great desire to become a professional in web development :)

**Skills:** HTML, CSS, some JS, Git, VScode

_This is my solution of kata [Who's Online?](https://www.codewars.com/kata/5b6375f707a2664ada00002a) on Codewars:_

```javascript
const whosOnline = (friends) => {
  let online = [];
  let offline = [];
  let away = [];
  
  friends.map(e => e.status === 'online' && e.lastActivity < 11 ? online.push(e.username) :
              e.status === 'offline' ? offline.push(e.username) : away.push(e.username));
              
  if (online.length > 0 && offline.length > 0 && away.length > 0) return {online, offline, away};
  if (online.length > 0 && offline.length > 0) return {online, offline};
  if (online.length > 0 && away.length > 0) return {online, away};
  if (offline.length > 0 && away.length > 0) return {offline, away};
  return {}
  
}
```

**English proficiency :** A2

>Life is what happens to you while you're busy making other plans _(John Lennon)_