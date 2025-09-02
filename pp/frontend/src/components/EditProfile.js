import React from 'react';

const EditProfile = () => (
  <form>
    <input type="text" placeholder="Name" />
    <textarea placeholder="Bio"></textarea>
    <button type="submit">Save</button>
  </form>
);

export default EditProfile;