module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },
    // checks post ownership
    check_post_owner: (post, user) => {
      if(post.user_id === user){
        return true;
      } else {
        return false;
      }
    }
}