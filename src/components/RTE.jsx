import React from 'react';
import {Editor} from '@tinymce/tinymce-react';
import {Controller} from 'react-hook-form'

function RTE({name, control, label, defaultValue = ""}) {
  return (
   <>
    <Controller
    name={name || "content"}
    control={control}
    render={({field: {onChange}}) => (
        <Editor
        initialValue={defaultValue}
        apiKey="ot2ni7453fcm0rdl22eicasixailz1x7c9d9nv5tdl8iz5s8"
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
        />
    )}
    />
   </>
  )
}

export default RTE