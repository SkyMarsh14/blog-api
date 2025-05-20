const sendForm = async (formElement, url, navigate) => {
  try {
    const formData = new FormData(formElement);
    const body = {};
    for (const pair of formData.entries()) {
      body[pair[0]] = pair[1];
      if (pair[1] === "on") {
        body[pair[0]] = true;
      } else if (pair[1] === "off") {
        body[pair[0]] = false;
      }
    }
    const token = localStorage.getItem("token");
    const options = {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
        mode: "cors",
      },
    };
    const response = await fetch(url, options);
    if (response.status === 401) {
      localStorage.removeItem("token");
      navigate("/login");
      throw new Error(`Unauthorized access`);
    }
    return await response.json();
  } catch (err) {
    console.error(`Form submission error:`, err);
    throw new Error(err);
  }
};
export default sendForm;
