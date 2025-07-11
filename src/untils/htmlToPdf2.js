import html2Canvas from 'html2canvas'
import jsPDF from 'jspdf'

const htmlToPdf = {
  // 下载 PDF 文件
  async getPdf(title = '文件') {
    const pdf = new jsPDF('p', 'mm', 'a4')

    const selectors = ['#pdfDom1', '#pdfDom2']
    for (let i = 0; i < selectors.length; i++) {
      const canvas = await html2Canvas(document.querySelector(selectors[i]), {
        allowTaint: false,
        taintTest: false,
        logging: false,
        useCORS: true,
        dpi: window.devicePixelRatio * 4,
        scale: 4,
      })

      await appendCanvasToPdf(canvas, pdf, i > 0) // 第一个不要 addPage，后面都要
    }

    pdf.save(`${title}.pdf`)
  },

  // 返回 PDF 文件对象
  async getPdfFile(title = '文件') {
    const pdf = new jsPDF('p', 'mm', 'a4')
    const selectors = ['#pdfDom1', '#pdfDom2']

    for (let i = 0; i < selectors.length; i++) {
      const canvas = await html2Canvas(document.querySelector(selectors[i]), {
        allowTaint: false,
        taintTest: false,
        logging: false,
        useCORS: true,
        dpi: window.devicePixelRatio * 4,
        scale: 4,
      })

      await appendCanvasToPdf(canvas, pdf, i > 0)
    }

    const blob = pdf.output('blob')
    const file = new File([blob], `${title}.pdf`, { type: 'application/pdf' })
    return file
  },
}

// 通用函数：将 canvas 分页加入 pdf
async function appendCanvasToPdf(canvas, pdf, addPageFirst = false) {
  const ctx = canvas.getContext('2d')
  const a4w = 210,
    a4h = 297
  const imgHeight = Math.floor((a4h * canvas.width) / a4w)
  let renderedHeight = 0

  while (renderedHeight < canvas.height) {
    const pageCanvas = document.createElement('canvas')
    pageCanvas.width = canvas.width
    pageCanvas.height = Math.min(imgHeight, canvas.height - renderedHeight)

    pageCanvas
      .getContext('2d')
      .putImageData(
        ctx.getImageData(
          0,
          renderedHeight,
          canvas.width,
          Math.min(imgHeight, canvas.height - renderedHeight)
        ),
        0,
        0
      )

    if (addPageFirst || renderedHeight > 0) {
      pdf.addPage()
    }

    pdf.addImage(
      pageCanvas.toDataURL('image/jpeg', 1.0),
      'JPEG',
      0,
      0,
      a4w,
      Math.min(a4h, (a4w * pageCanvas.height) / pageCanvas.width)
    )

    renderedHeight += imgHeight
  }
}

export default htmlToPdf
