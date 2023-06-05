import React from 'react';
import Head from 'next/head';

import Visual from '../../components/Visual';
import { projectsData } from '@/data/dataFeatures';
import { useRouter } from 'next/router';

export default function ProjectId() {
  const router = useRouter()
  const projectId = router.query.projectId

  return (
    <div>
      <Head>
        <title>MGA Software | Full Stack developper</title>
      </Head>
      <Visual
        title={projectsData[projectId]?.title}
        techs={projectsData[projectId]?.techs}
        image={projectsData[projectId]?.image}
        descriptions={projectsData[projectId]?.descriptions}
        codeLink={projectsData[projectId]?.codeLink}
        demoLink={projectsData[projectId]?.demoLink} />
    </div>
  )
}
