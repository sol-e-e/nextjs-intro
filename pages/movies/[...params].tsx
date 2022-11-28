import Seo from "../../components/Seo";

interface IGetServerSideParamsProps {
    params: {
      params: string | string[];
    };
  }

export default function Detail({ params }: IGetServerSideParamsProps['params']) {
  const title = params[0];
  return (
    <div>
      <Seo title={title} />
      <h4>{title}</h4>
    </div>
  );
}

export async function getServerSideProps({params: {params}} : IGetServerSideParamsProps) {
    return {
        props: {
            params,
        }
    }
}
