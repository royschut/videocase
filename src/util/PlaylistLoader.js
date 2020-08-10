/*    PlaylistLoader
 *    Loads the playlist from external API
 *    On result.data.playlist: return pl to callBack
 *
 *    (url hardcoded above for this case)
 */

import axios from "axios";

const source = "https://cdn.jwplayer.com/v2/playlists/iG6xB42W";

export default function PlaylistLoader(callBack) {
  axios({
    method: "get",
    url: source,
  }).then(
    (result) => {
      if (result.data) {
        if (result.data.playlist) {
          callBack(result.data.playlist);
        } else {
          console.log("No playlist: " + result.data);
        }
      } else {
        console.log("No data: " + result);
      }
    },
    (error) => {
      console.log("error: " + error.message);
    }
  );
}
