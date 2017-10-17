export const signup = ({ username, password, email }) =>
  $.ajax({
    method: "POST",
    url: "api/users",
    data: { user: { username: username, password: password, email: email } }
  });

export const login = ({ username, password }) =>
  $.ajax({
    method: "POST",
    url: "api/session",
    data: { user: { username: username, password: password } }
  });

export const logout = () => {
  return $.ajax({
    method: "DELETE",
    url: "api/session"
  });
};
