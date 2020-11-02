import { gql, useMutation } from "@apollo/client";

const MUTATION = gql`
  mutation($file: Upload!) {
    uploadFile(file: $file) {
      success
    }
  }
`;

function FileUpload() {
  const [mutate] = useMutation(MUTATION, {
    onCompleted: (data) => console.log(data),
  });

  function onChange({
    target: {
      validity,
      files: [file],
    },
  }) {
    if (validity.valid) mutate({ variables: { file } });
  }

  return <input type="file" required onChange={onChange} />;
}

export default FileUpload;
