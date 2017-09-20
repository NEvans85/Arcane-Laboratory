export const signup = ({ username, password }) =>
  $.ajax({
    method: "POST",
    url: "api/users",
    data: { user: { username: username, password: password } }
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
