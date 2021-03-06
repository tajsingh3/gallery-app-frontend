import React, { useMemo, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { ErrorMessage } from "formik";
import Typography from "@material-ui/core/Typography";

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out"
};

const activeStyle = {
  borderColor: "#2196f3"
};

const acceptStyle = {
  borderColor: "#00e676"
};

const rejectStyle = {
  borderColor: "#ff1744"
};

const FileDrop = ({ handleChange, setFileInput }) => {
  const onDrop = useCallback(
    acceptedFiles => {
      const file = acceptedFiles[0];
      setFileInput(file);
    },
    [setFileInput]
  );

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({ accept: "image/*", onDrop });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {})
    }),
    [isDragActive, isDragAccept, isDragReject]
  );

  const file = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="container">
      <div {...getRootProps({ style })}>
        <input
          {...getInputProps({
            name: "artworkImage",
            onBlur: null,
            onChange: handleChange,
            multiple: false
          })}
        />
        <p>Drag 'n' drop your image, or click to select image </p>
      </div>
      <Typography variant="caption" display="block" color="error">
        <ErrorMessage name="artworkImage" />
      </Typography>
      <aside>
        <h4>File</h4>
        <ul>{file}</ul>
      </aside>
    </section>
  );
};

export default FileDrop;
