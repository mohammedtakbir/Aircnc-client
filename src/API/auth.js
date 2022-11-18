export const setAuthToken = (res) => {
    const currentUser = {
        user: res.user?.email
    };
    fetch(`http://localhost:5000/user/${res.user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            localStorage.setItem('aircnc-token', data.token)
        })
}