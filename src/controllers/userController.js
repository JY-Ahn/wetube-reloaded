// export const를 사용하면, import할 때 실제 이름으로 import해줘야 한다
export const join = (req, res) => res.send("Join");
export const edit = (req, res) => res.send("Edit users");
export const remove = (req, res) => res.send("Remove users");
// export default join; //다른 파일에서 import할 때 이름을 바꿔서 import할 수 있다
