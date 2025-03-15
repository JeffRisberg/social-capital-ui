import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addTag, deleteTag, fetchTags, select} from "./tagsSlice";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const styles = {
   title: {
      marginTop: '5px',
      padding: '4px',
      background: '#ddd'
   },
   item: {
      marginTop: '5px',
      marginLeft: '15px',
      padding: '3px',
      background: '#eee'
   },
   selectedItem: {
      marginTop: '5px',
      marginLeft: '15px',
      padding: '3px',
      background: '#888',
      color: '#fff'
   }
};


export function Tags() {
   const dispatch = useDispatch();

   const tagsList = useSelector((state) => state.tags.results)
   const selectedId = useSelector((state) => state.tags.selected)

   React.useEffect(() => {
      dispatch(fetchTags())
   });

   React.useEffect(() => {
   }, [selectedId]);

   const classes = styles;

   function makeid(length) {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < length) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
         counter += 1;
      }
      return result;
   }

   function selectTagHandler(e, id) {
      e?.preventDefault()
      dispatch(select(id))
   }

   function addTagHandler(e) {
      e?.preventDefault()
      dispatch(addTag({name: makeid(6)}))
   }

   function deleteTagHandler(e) {
      e?.preventDefault()
      if (selectedId) {
         dispatch(deleteTag({id: selectedId}));
      }
   }

   return (
      <>
         <Typography sx={classes.title} variant="h5">
            Tags
         </Typography>
         <div>
            {tagsList?.data && tagsList?.data?.map((tag, index) => (
                  <Typography key={tag.id}
                              sx={tag.id === selectedId ? classes.selectedItem : classes.item}
                              variant="h6">
                     <div onClick={(e) => selectTagHandler(e, tag.id)}>{tag.name}</div>
                  </Typography>
               )
            )}
         </div>
         <Button onClick={addTagHandler}>
            Add Tag
         </Button>
         <Button onClick={deleteTagHandler}>
            Delete Tag
         </Button>
      </>
   );
}
