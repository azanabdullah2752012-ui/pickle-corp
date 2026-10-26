import docx
from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml import parse_xml, OxmlElement
from docx.oxml.ns import nsdecls, qn
import os

def create_document():
    doc = Document()

    # 1-inch margins
    sections = doc.sections
    for section in sections:
        section.top_margin = Inches(0.8)
        section.bottom_margin = Inches(0.8)
        section.left_margin = Inches(0.8)
        section.right_margin = Inches(0.8)

    # Color Palette Constants
    COLOR_ESPRESSO = RGBColor(88, 47, 14)    # #582F0E
    COLOR_CARAMEL = RGBColor(127, 79, 36)    # #7F4F24
    COLOR_INK = RGBColor(51, 61, 41)         # #333D29
    COLOR_OLIVE = RGBColor(101, 109, 74)     # #656D4A
    COLOR_MUTED = RGBColor(140, 144, 130)

    # Helper function for cell background color
    def set_cell_background(cell, fill_hex):
        shading_xml = f'<w:shd {nsdecls("w")} w:fill="{fill_hex}"/>'
        cell._tc.get_or_add_tcPr().append(parse_xml(shading_xml))

    # Helper function for cell borders
    def set_cell_margins(cell, top=100, bottom=100, left=150, right=150):
        tcPr = cell._tc.get_or_add_tcPr()
        tcMar = OxmlElement('w:tcMar')
        for m, val in [('w:top', top), ('w:bottom', bottom), ('w:left', left), ('w:right', right)]:
            node = OxmlElement(m)
            node.set(qn('w:w'), str(val))
            node.set(qn('w:type'), 'dxa')
            tcMar.append(node)
        tcPr.append(tcMar)

    # ── Document Header ────────────────────────────────────────────────────────
    p_pre = doc.add_paragraph()
    r_pre = p_pre.add_run("PICKLE CORP™  •  COMMERCIAL PREPRESS SPECIFICATION")
    r_pre.font.name = "Arial"
    r_pre.font.size = Pt(8.5)
    r_pre.font.bold = True
    r_pre.font.color.rgb = COLOR_CARAMEL
    p_pre.paragraph_format.space_after = Pt(2)

    p_title = doc.add_paragraph()
    r_title = p_title.add_run("Official Business Card & Barter Marker")
    r_title.font.name = "Georgia"
    r_title.font.size = Pt(24)
    r_title.font.bold = True
    r_title.font.color.rgb = COLOR_ESPRESSO
    p_title.paragraph_format.space_after = Pt(4)

    p_sub = doc.add_paragraph()
    r_sub = p_sub.add_run("Commercial Print Shop Production Order Document & Prepress Proof\n")
    r_sub.font.name = "Arial"
    r_sub.font.size = Pt(11)
    r_sub.font.color.rgb = COLOR_INK
    r_sub2 = p_sub.add_run("Founders: Azan Abdullah & Thanvi (Age 14)  •  Marketing: Viren  •  Studio: Pickle Corp™  •  Favors over Fiat ($0.00)")
    r_sub2.font.name = "Arial"
    r_sub2.font.size = Pt(9.5)
    r_sub2.font.italic = True
    r_sub2.font.color.rgb = COLOR_OLIVE
    p_sub.paragraph_format.space_after = Pt(16)

    # ── Section 1: Visual Proof Images ─────────────────────────────────────────
    p_sec1 = doc.add_paragraph()
    r_sec1 = p_sec1.add_run("1. Visual Prepress Proofs (Front & Back)")
    r_sec1.font.name = "Georgia"
    r_sec1.font.size = Pt(14)
    r_sec1.font.bold = True
    r_sec1.font.color.rgb = COLOR_ESPRESSO
    p_sec1.paragraph_format.space_before = Pt(8)
    p_sec1.paragraph_format.space_after = Pt(6)

    p_desc = doc.add_paragraph()
    p_desc.add_run("Below are the 300 DPI high-resolution visual proofs for Side A (Front) and Side B (Back). High-res PNG asset files ('business-card-front.png' and 'business-card-back.png') are included in the job folder.")
    p_desc.runs[0].font.name = "Arial"
    p_desc.runs[0].font.size = Pt(9.5)
    p_desc.runs[0].font.color.rgb = COLOR_INK
    p_desc.paragraph_format.space_after = Pt(12)

    # Insert Front Image
    if os.path.exists("business-card-front.png"):
        p_img1 = doc.add_paragraph()
        p_img1.alignment = WD_ALIGN_PARAGRAPH.CENTER
        run_img1 = p_img1.add_run()
        run_img1.add_picture("business-card-front.png", width=Inches(5.0))
        p_img1.paragraph_format.space_after = Pt(4)

        p_cap1 = doc.add_paragraph()
        p_cap1.alignment = WD_ALIGN_PARAGRAPH.CENTER
        r_cap1 = p_cap1.add_run("Side A (Front Face) — The Studio Credential (3.5″ × 2.0″ Trim)")
        r_cap1.font.name = "Arial"
        r_cap1.font.size = Pt(8.5)
        r_cap1.font.italic = True
        r_cap1.font.color.rgb = COLOR_OLIVE
        p_cap1.paragraph_format.space_after = Pt(14)

    # Insert Back Image
    if os.path.exists("business-card-back.png"):
        p_img2 = doc.add_paragraph()
        p_img2.alignment = WD_ALIGN_PARAGRAPH.CENTER
        run_img2 = p_img2.add_run()
        run_img2.add_picture("business-card-back.png", width=Inches(5.0))
        p_img2.paragraph_format.space_after = Pt(4)

        p_cap2 = doc.add_paragraph()
        p_cap2.alignment = WD_ALIGN_PARAGRAPH.CENTER
        r_cap2 = p_cap2.add_run("Side B (Back Face) — Barter Covenant & Scannable QR Dispatch (3.5″ × 2.0″ Trim)")
        r_cap2.font.name = "Arial"
        r_cap2.font.size = Pt(8.5)
        r_cap2.font.italic = True
        r_cap2.font.color.rgb = COLOR_OLIVE
        p_cap2.paragraph_format.space_after = Pt(20)

    # ── Section 2: Technical Specifications Table ──────────────────────────────
    p_sec2 = doc.add_paragraph()
    r_sec2 = p_sec2.add_run("2. Technical Print Specifications")
    r_sec2.font.name = "Georgia"
    r_sec2.font.size = Pt(14)
    r_sec2.font.bold = True
    r_sec2.font.color.rgb = COLOR_ESPRESSO
    p_sec2.paragraph_format.space_before = Pt(8)
    p_sec2.paragraph_format.space_after = Pt(8)

    spec_table = doc.add_table(rows=1, cols=2)
    spec_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    spec_table.autofit = False

    # Header Row
    hdr_cells = spec_table.rows[0].cells
    hdr_cells[0].width = Inches(2.2)
    hdr_cells[1].width = Inches(4.5)
    hdr_cells[0].paragraphs[0].add_run("Specification Parameter").font.bold = True
    hdr_cells[1].paragraphs[0].add_run("Production Requirement & Details").font.bold = True
    hdr_cells[0].paragraphs[0].runs[0].font.color.rgb = RGBColor(255, 255, 255)
    hdr_cells[1].paragraphs[0].runs[0].font.color.rgb = RGBColor(255, 255, 255)
    set_cell_background(hdr_cells[0], "582F0E")
    set_cell_background(hdr_cells[1], "582F0E")

    specs_data = [
        ("Finished Trim Size", "3.5 in × 2.0 in (88.9 mm × 50.8 mm) — Standard Business Card"),
        ("Full Bleed Canvas", "3.75 in × 2.25 in (95.25 mm × 57.15 mm) [0.125 in / 3.175 mm bleed]"),
        ("Safe Zone", "3.25 in × 1.75 in (82.55 mm × 44.45 mm) [Keep all critical copy inside]"),
        ("Orientation", "Horizontal / Landscape"),
        ("Sides / Printing", "2-Sided Full Color Process (4/4 CMYK)"),
        ("Recommended Stock", "350gsm – 450gsm Premium Cotton Uncoated Matte (Warm Bone / Natural Off-White)"),
        ("Special Finishes", "Front: Blind Deboss on 'Pickle Corp™' title and Torch Mark.\nOptional: Warm Gold / Bronze Foil stamping on Torch flame."),
        ("Corner Cutting", "Standard 90° Clean Square Trim (or 3.5mm rounded radius)"),
        ("Resolution", "300+ DPI (Vector preferred for text & line art)"),
        ("Recommended Quantity", "100 / 250 / 500 Cards")
    ]

    for i, (param, val) in enumerate(specs_data):
        row = spec_table.add_row()
        c0, c1 = row.cells
        c0.width = Inches(2.2)
        c1.width = Inches(4.5)
        
        r0 = c0.paragraphs[0].add_run(param)
        r0.font.name = "Arial"
        r0.font.size = Pt(9)
        r0.font.bold = True
        r0.font.color.rgb = COLOR_INK

        r1 = c1.paragraphs[0].add_run(val)
        r1.font.name = "Arial"
        r1.font.size = Pt(9)
        r1.font.color.rgb = COLOR_INK

        bg_hex = "F4F2EC" if i % 2 == 1 else "FFFFFF"
        set_cell_background(c0, bg_hex)
        set_cell_background(c1, bg_hex)
        set_cell_margins(c0, 80, 80, 120, 120)
        set_cell_margins(c1, 80, 80, 120, 120)

    doc.add_paragraph().paragraph_format.space_after = Pt(14)

    # ── Section 3: Exact Copy & Text Breakdown ─────────────────────────────────
    p_sec3 = doc.add_paragraph()
    r_sec3 = p_sec3.add_run("3. Exact Word-for-Word Copy Breakdown")
    r_sec3.font.name = "Georgia"
    r_sec3.font.size = Pt(14)
    r_sec3.font.bold = True
    r_sec3.font.color.rgb = COLOR_ESPRESSO
    p_sec3.paragraph_format.space_before = Pt(8)
    p_sec3.paragraph_format.space_after = Pt(8)

    # Side A
    p_a = doc.add_paragraph()
    r_ahdr = p_a.add_run("SIDE A (FRONT) COPY:\n")
    r_ahdr.font.bold = True
    r_ahdr.font.color.rgb = COLOR_CARAMEL
    p_a.add_run("• Top Left Telemetry: PC-MARKER // № 0026\n")
    p_a.add_run("• Top Right Status: ● 1 BUILD SLOT OPEN\n")
    p_a.add_run("• Central Graphic: Pickle Corp Torch Logo (logo-torch.png)\n")
    p_a.add_run("• Main Title: Pickle Corp™ (Cabinet Grotesk 900)\n")
    p_a.add_run("• Sub-Motto: Paid Strictly in Favors. Zero Fiat. (Instrument Serif Italic)\n")
    p_a.add_run("• Identity Tag: Founders • Age 14\n")
    p_a.add_run("• Founder Names: Azan & Thanvi\n")
    p_a.add_run("• Focus: Systems & Aesthetics • Marketing: Viren\n")
    p_a.add_run("• Bottom Right: $0.00 / No Cash Ever\n")
    for r in p_a.runs:
        r.font.name = "Arial"
        r.font.size = Pt(9.5)
    p_a.paragraph_format.space_after = Pt(12)

    # Side B
    p_b = doc.add_paragraph()
    r_bhdr = p_b.add_run("SIDE B (BACK) COPY:\n")
    r_bhdr.font.bold = True
    r_bhdr.font.color.rgb = COLOR_CARAMEL
    p_b.add_run("• Header: BARTER COVENANT • THE OFFICIAL LEDGER RECORD (PROMISSORY FAVOR LIEN)\n")
    p_b.add_run("• Covenant Text: “The bearer holds a direct promissory marker for production software engineering or design execution by Azan & Thanvi, with marketing launch by Viren. In accordance with the Barter Law, cash is declined. You owe us one solid favor called in when we find ourselves in a pickle. The ledger never forgets.”\n")
    p_b.add_run("• Graphic: Scannable Vector QR Code pointing to https://azanabdullah2752012-ui.github.io/pickle-corp/\n")
    p_b.add_run("• Direct Email: azanmail2022@gmail.com\n")
    p_b.add_run("• Direct Phone / Hotline: +91 70100 59290\n")
    p_b.add_run("• Website: azanabdullah2752012-ui.github.io/pickle-corp\n")
    p_b.add_run("• Accepted Trades: Pizza, Steam games, brownies, burgers, viral launches\n")
    p_b.add_run("• Signatures: Systems: Azan  |  Aesthetics: Thanvi  |  Marketing: Viren  |  Status: Banked ✦\n")
    for r in p_b.runs:
        r.font.name = "Arial"
        r.font.size = Pt(9.5)
    p_b.paragraph_format.space_after = Pt(16)

    # ── Section 4: Brand Colors for Ink & Prepress ─────────────────────────────
    p_sec4 = doc.add_paragraph()
    r_sec4 = p_sec4.add_run("4. Brand Color Specifications")
    r_sec4.font.name = "Georgia"
    r_sec4.font.size = Pt(14)
    r_sec4.font.bold = True
    r_sec4.font.color.rgb = COLOR_ESPRESSO
    p_sec4.paragraph_format.space_before = Pt(8)
    p_sec4.paragraph_format.space_after = Pt(8)

    color_table = doc.add_table(rows=1, cols=4)
    color_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    c_hdr = color_table.rows[0].cells
    c_hdr[0].width = Inches(1.8)
    c_hdr[1].width = Inches(1.2)
    c_hdr[2].width = Inches(1.6)
    c_hdr[3].width = Inches(2.1)
    for idx, title in enumerate(["Color Name", "HEX Code", "CMYK Values", "Usage on Card"]):
        c_hdr[idx].paragraphs[0].add_run(title).font.bold = True
        c_hdr[idx].paragraphs[0].runs[0].font.color.rgb = RGBColor(255, 255, 255)
        set_cell_background(c_hdr[idx], "582F0E")

    color_data = [
        ("Warm Bone / Cream", "#FCFBFA", "C:1 M:1 Y:2 K:0", "Card Background / Cotton Paper"),
        ("Deep Espresso Ink", "#333D29", "C:45 M:65 Y:85 K:55", "Primary Text, QR Code, Lines"),
        ("Caramel Accent", "#7F4F24", "C:25 M:60 Y:85 K:15", "Motto Italics, Badges, Foil"),
        ("Olive Forest", "#656D4A", "C:48 M:32 Y:70 K:22", "Telemetry, Subtitles, Rules")
    ]

    for i, (cname, hexcode, cmyk, usage) in enumerate(color_data):
        row = color_table.add_row()
        for c_idx, val in enumerate([cname, hexcode, cmyk, usage]):
            cell = row.cells[c_idx]
            r = cell.paragraphs[0].add_run(val)
            r.font.name = "Arial"
            r.font.size = Pt(9)
            if c_idx == 0:
                r.font.bold = True
            bg = "F4F2EC" if i % 2 == 1 else "FFFFFF"
            set_cell_background(cell, bg)
            set_cell_margins(cell, 60, 60, 100, 100)

    doc.add_paragraph().paragraph_format.space_after = Pt(16)

    # ── Section 5: Prepress Contacts & Approval ────────────────────────────────
    p_sec5 = doc.add_paragraph()
    r_sec5 = p_sec5.add_run("5. Prepress Contact & Approval")
    r_sec5.font.name = "Georgia"
    r_sec5.font.size = Pt(14)
    r_sec5.font.bold = True
    r_sec5.font.color.rgb = COLOR_ESPRESSO
    p_sec5.paragraph_format.space_before = Pt(8)
    p_sec5.paragraph_format.space_after = Pt(6)

    p_ct = doc.add_paragraph()
    p_ct.add_run("Please submit digital prepress PDF proofs prior to plating/printing to:\n")
    p_ct.add_run("• Primary Contact: Azan Abdullah & Thanvi (Founders) • Viren (Marketing)\n")
    p_ct.add_run("• Email: azanmail2022@gmail.com\n")
    p_ct.add_run("• Phone / WhatsApp: +91 70100 59290\n")
    p_ct.add_run("• Live Web Proof: https://azanabdullah2752012-ui.github.io/pickle-corp/#card\n")
    for r in p_ct.runs:
        r.font.name = "Arial"
        r.font.size = Pt(9.5)
        r.font.color.rgb = COLOR_INK

    # Save Document
    filename = "Pickle-Corp-Business-Card-Print-Order.docx"
    doc.save(filename)
    print(f"Successfully generated {filename}")

if __name__ == "__main__":
    create_document()
